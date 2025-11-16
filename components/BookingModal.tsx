
import React, { useState } from 'react';
import type { Photographer, BookingPackage } from '../types';
import { Button } from './Button';
import { useTranslation } from '../hooks/useTranslation';

interface BookingModalProps {
  photographer: Photographer;
  bookingDetails: {
    date: string;
    pkg: BookingPackage;
    notes: string;
  };
  onClose: () => void;
  onBookingSuccess: () => void;
}

type BookingStep = 'details' | 'payment' | 'success';
type PaymentMethod = 'card' | 'ideal' | 'paypal';

const PaymentMethodButton: React.FC<{
  method: PaymentMethod;
  current: PaymentMethod;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ method, current, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-center p-2 rounded-md transition-all text-sm font-medium h-12 ${
        current === method
          ? 'bg-[#FF7D6B] text-white shadow-sm'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
);

export const BookingModal: React.FC<BookingModalProps> = ({ photographer, bookingDetails, onClose, onBookingSuccess }) => {
  const { t, language } = useTranslation();
  const [step, setStep] = useState<BookingStep>('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
        onBookingSuccess();
        setIsProcessing(false);
        setStep('success');
    }, 1500); // Simulate network request
  };
  
  const formatDate = (dateString: string) => {
    const locale = `${language.toLowerCase()}-${language === 'EN' ? 'US' : language}`;
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(locale, options);
  };
  

  const renderContent = () => {
    switch(step) {
      case 'details':
        return (
          <div>
            <h3 className="text-2xl font-bold text-center text-[#2C3E50]">{t('BookingModal_ConfirmTitle')}</h3>
            <div className="mt-6 space-y-4 text-left">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#5A6A78]">{t('BookingModal_Photographer')}</p>
                    <p className="font-semibold text-[#2C3E50]">{photographer.name}</p>
                </div>
                 <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#5A6A78]">{t('BookingModal_Date')}</p>
                    <p className="font-semibold text-[#2C3E50]">{formatDate(bookingDetails.date)}</p>
                </div>
                 <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#5A6A78]">{t('BookingModal_Package')}</p>
                    <p className="font-semibold text-[#2C3E50]">{bookingDetails.pkg.name}</p>
                </div>
                {bookingDetails.notes && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-[#5A6A78]">{t('BookingModal_YourNote')}</p>
                        <p className="font-normal text-gray-700 text-sm italic whitespace-pre-wrap">"{bookingDetails.notes}"</p>
                    </div>
                )}
                <div className="border-t pt-4 mt-4">
                     <div className="flex justify-between items-center font-bold text-xl text-[#2C3E50]">
                        <span>{t('BookingModal_TotalPrice')}</span>
                        <span>€{bookingDetails.pkg.price}</span>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <Button variant="ghost" onClick={onClose}>{t('BookingModal_Cancel')}</Button>
              <Button onClick={() => setStep('payment')}>{t('BookingModal_ProceedToPayment')}</Button>
            </div>
          </div>
        );
      case 'payment':
        return (
          <form onSubmit={handlePayment}>
            <h3 className="text-2xl font-bold text-center text-[#2C3E50]">{t('BookingModal_PaymentTitle')}</h3>
            <p className="text-center text-sm mt-1 text-[#5A6A78]">{t('BookingModal_Total')}: €{bookingDetails.pkg.price}</p>
            
            <div className="mt-6 grid grid-cols-3 gap-2 border border-gray-200 rounded-lg p-1 bg-gray-50">
              <PaymentMethodButton method="card" current={paymentMethod} onClick={() => setPaymentMethod('card')}>
                  {t('BookingModal_Card')}
              </PaymentMethodButton>
              <PaymentMethodButton method="ideal" current={paymentMethod} onClick={() => setPaymentMethod('ideal')}>
                  iDEAL
              </PaymentMethodButton>
              <PaymentMethodButton method="paypal" current={paymentMethod} onClick={() => setPaymentMethod('paypal')}>
                  PayPal
              </PaymentMethodButton>
            </div>

            <div className="mt-6 space-y-4 text-left min-h-[160px]">
              {paymentMethod === 'card' && (
                 <div className="space-y-4">
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-[#2C3E50]">{t('BookingModal_CardNumber')}</label>
                      <input type="text" id="card-number" placeholder="•••• •••• •••• ••••" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-[#2C3E50]">{t('BookingModal_ExpiryDate')}</label>
                          <input type="text" id="expiry" placeholder="MM / YY" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                      </div>
                      <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-[#2C3E50]">CVC</label>
                          <input type="text" id="cvc" placeholder="•••" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm" />
                      </div>
                    </div>
                 </div>
              )}
              {paymentMethod === 'ideal' && (
                <div>
                   <label htmlFor="ideal-bank" className="block text-sm font-medium text-[#2C3E50]">{t('BookingModal_ChooseBank')}</label>
                   <select id="ideal-bank" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-[#FF7D6B] focus:ring-[#FF7D6B] sm:text-sm">
                      <option>ABN AMRO</option>
                      <option>ING</option>
                      <option>Rabobank</option>
                      <option>de Volksbank (SNS, ASN, RegioBank)</option>
                      <option>Triodos Bank</option>
                   </select>
                </div>
              )}
              {paymentMethod === 'paypal' && (
                <div className="text-center pt-8">
                  <p className="text-[#5A6A78]">{t('BookingModal_PayPalRedirect')}</p>
                </div>
              )}
            </div>
             <div className="mt-8 flex justify-end">
                <Button type="submit" className="w-full text-lg !py-3" disabled={isProcessing}>
                    {isProcessing ? t('BookingModal_Processing') : t('BookingModal_PayButton', {price: bookingDetails.pkg.price})}
                </Button>
             </div>
          </form>
        );
      case 'success':
        return (
            <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#2C3E50]">{t('BookingModal_SuccessTitle')}</h3>
                <p className="mt-2 text-[#5A6A78]">
                    {t('BookingModal_SuccessMessage', {name: photographer.name, date: formatDate(bookingDetails.date)})}
                </p>
                <div className="mt-8">
                    <Button onClick={onClose} className="w-full">{t('BookingModal_Done')}</Button>
                </div>
            </div>
        );
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {renderContent()}
      </div>
    </div>
  );
};
