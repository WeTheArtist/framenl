
import React, { useState } from 'react';
import type { User, Conversation, Message, Photographer } from '../types';
import { PHOTOGRAPHERS } from '../constants';
import { Button } from '../components/Button';
import { ChatBubbleIcon } from '../components/IconComponents';

// Mock Data Generation
const generateMockConversations = (user: User, photographers: Photographer[]): Conversation[] => {
    const userConversations: Conversation[] = [];

    // Conversation with Anja
    if (photographers[0]) {
        const anja = photographers[0];
        const anjaMessages: Message[] = [
            { id: 'm1', senderId: 'user', text: 'Hi Anja! We absolutely love your work. Are you available on October 26th for a wedding in Amsterdam?', timestamp: '2024-08-10T10:00:00Z' },
            { id: 'm2', senderId: anja.id, text: `Hi ${user.name}! Thank you so much! I've just checked my calendar and yes, October 26th is currently free. I'd love to hear more about your plans!`, timestamp: '2024-08-10T10:05:00Z' },
        ];
        userConversations.push({
            id: 'conv1',
            photographerId: anja.id,
            photographerName: anja.name,
            photographerProfileImage: anja.profileImageUrl,
            lastMessage: anjaMessages[anjaMessages.length - 1].text,
            lastMessageTimestamp: anjaMessages[anjaMessages.length - 1].timestamp,
            messages: anjaMessages
        });
    }

    // Conversation with Lars
    if (photographers[1]) {
        const lars = photographers[1];
        const larsMessages: Message[] = [
             { id: 'm3', senderId: 'user', text: 'Hello Lars, I need new headshots for my company\'s website. There will be about 15 people.', timestamp: '2024-08-09T14:20:00Z' },
        ];
        userConversations.push({
            id: 'conv2',
            photographerId: lars.id,
            photographerName: lars.name,
            photographerProfileImage: lars.profileImageUrl,
            lastMessage: larsMessages[larsMessages.length - 1].text,
            lastMessageTimestamp: larsMessages[larsMessages.length - 1].timestamp,
            messages: larsMessages
        });
    }
    
    return userConversations.sort((a, b) => new Date(b.lastMessageTimestamp).getTime() - new Date(a.lastMessageTimestamp).getTime());
};


interface MessagesPageProps {
  user: User;
  onViewProfile: (photographerId: string) => void;
}

export const MessagesPage: React.FC<MessagesPageProps> = ({ user, onViewProfile }) => {
    const [conversations, setConversations] = useState<Conversation[]>(() => generateMockConversations(user, PHOTOGRAPHERS));
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(conversations.length > 0 ? conversations[0].id : null);
    const [newMessage, setNewMessage] = useState('');

    const selectedConversation = conversations.find(c => c.id === selectedConversationId);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedConversation) return;

        const message: Message = {
            id: Date.now().toString(),
            senderId: 'user',
            text: newMessage.trim(),
            timestamp: new Date().toISOString()
        };

        const updatedConversations = conversations.map(conv => {
            if (conv.id === selectedConversation.id) {
                return {
                    ...conv,
                    messages: [...conv.messages, message],
                    lastMessage: message.text,
                    lastMessageTimestamp: message.timestamp,
                };
            }
            return conv;
        });

        setConversations(updatedConversations.sort((a, b) => new Date(b.lastMessageTimestamp).getTime() - new Date(a.lastMessageTimestamp).getTime()));
        setNewMessage('');
    };

    return (
        <div className="bg-[#FFF9F5]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Messages</h1>
                </header>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-lg flex h-[75vh]">
                    {/* Sidebar */}
                    <aside className="w-full md:w-1/3 border-r border-gray-200/80 flex-col md:flex hidden">
                        <div className="p-4 border-b border-gray-200/80">
                            <h2 className="text-lg font-semibold text-[#2C3E50]">Conversations</h2>
                        </div>
                        <div className="overflow-y-auto flex-grow">
                            {conversations.map(conv => (
                                <div 
                                    key={conv.id}
                                    onClick={() => setSelectedConversationId(conv.id)}
                                    className={`p-4 flex items-center space-x-3 cursor-pointer hover:bg-orange-50/50 ${selectedConversationId === conv.id ? 'bg-orange-100/60' : ''}`}
                                >
                                    <img src={conv.photographerProfileImage} alt={conv.photographerName} className="w-12 h-12 rounded-full object-cover"/>
                                    <div className="flex-grow overflow-hidden">
                                        <p className="font-semibold text-[#2C3E50] truncate">{conv.photographerName}</p>
                                        <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    {/* Main Chat Area */}
                    <main className="w-full md:w-2/3 flex flex-col">
                        {selectedConversation ? (
                            <>
                                <header className="p-4 border-b border-gray-200/80 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[#2C3E50]">{selectedConversation.photographerName}</h3>
                                     <button onClick={() => onViewProfile(selectedConversation.photographerId)} className="text-sm font-semibold text-[#FF7D6B] hover:text-[#E86A5A]">
                                        View Profile
                                    </button>
                                </header>
                                <div className="flex-grow p-6 overflow-y-auto space-y-4">
                                    {selectedConversation.messages.map(msg => (
                                        <div key={msg.id} className={`flex items-end gap-2 ${msg.senderId === 'user' ? 'justify-end' : 'justify-start'}`}>
                                             {msg.senderId !== 'user' && <img src={selectedConversation.photographerProfileImage} className="w-8 h-8 rounded-full object-cover" />}
                                            <div className={`max-w-md p-3 rounded-2xl ${msg.senderId === 'user' ? 'bg-[#FF7D6B] text-white rounded-br-none' : 'bg-gray-200 text-[#2C3E50] rounded-bl-none'}`}>
                                                <p className="text-sm">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <footer className="p-4 border-t border-gray-200/80 bg-white">
                                    <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                                        <input
                                            type="text"
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            placeholder="Type your message..."
                                            className="w-full px-4 py-2 rounded-full border-gray-300 bg-gray-100 focus:ring-[#FF7D6B] focus:border-[#FF7D6B]"
                                            aria-label="Message input"
                                        />
                                        <Button type="submit" disabled={!newMessage.trim()}>Send</Button>
                                    </form>
                                </footer>
                            </>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                                <ChatBubbleIcon className="w-16 h-16 text-gray-300" />
                                <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Select a conversation</h3>
                                <p className="text-[#5A6A78] mt-2 max-w-sm">
                                    Choose a conversation from the left panel to view messages or start a new one from a photographer's profile.
                                </p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};
