import React, { useState } from 'react';

interface CalendarProps {
  bookedDates: Set<string>; // Expecting 'YYYY-MM-DD'
  onDateClick?: (date: string) => void;
  interactive?: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({ bookedDates, onDateClick, interactive = false }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(startOfMonth);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  const endDate = new Date(endOfMonth);
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  const changeMonth = (offset: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };
  
  const renderDays = () => {
    const days = [];
    let day = new Date(startDate);
    while (day <= endDate) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const toYyyyMmDd = (date: Date) => date.toISOString().split('T')[0];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200/80">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
        <h3 className="font-semibold text-lg">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {renderDays().map((date, index) => {
          const dateString = toYyyyMmDd(date);
          const isBooked = bookedDates.has(dateString);
          const isCurrentMonth = date.getMonth() === currentDate.getMonth();

          let classes = "w-10 h-10 flex items-center justify-center rounded-full transition-colors ";
          if (isCurrentMonth) {
            if (isBooked) {
              classes += "bg-gray-300 text-gray-500 line-through cursor-not-allowed";
            } else if (interactive) {
              classes += "cursor-pointer hover:bg-[#FF7D6B] hover:text-white";
            } else {
               classes += "text-gray-700";
            }
          } else {
            classes += "text-gray-300";
          }
          if(isToday(date) && !isBooked) classes += " bg-[#FF7D6B]/20 text-[#E86A5A] font-bold";

          return (
            <div
              key={index}
              className={classes}
              onClick={() => interactive && !isBooked && onDateClick?.(dateString)}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
       <div className="mt-4 flex items-center justify-center space-x-4 text-xs">
          <div className="flex items-center"><span className="w-3 h-3 bg-white border rounded-full mr-1.5"></span> Available</div>
          <div className="flex items-center"><span className="w-3 h-3 bg-gray-300 rounded-full mr-1.5"></span> Booked</div>
        </div>
    </div>
  );
};