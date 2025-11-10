
import type { User, Booking } from '../types';

const USERS_KEY = 'framenlUsers';
const LOGGED_IN_USER_KEY = 'framenlLoggedInUserEmail';

// --- Database Simulation ---

const getUsers = (): User[] => {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
};

const saveUsers = (users: User[]): void => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const findUserByEmail = (email: string): User | undefined => {
    return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
};

// --- Public API for User Management ---

export const registerUser = ({ name, email, password }: { name: string; email: string; password?: string }): User => {
    const users = getUsers();
    if (findUserByEmail(email)) {
        throw new Error('An account with this email already exists.');
    }
    
    const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        password, // In a real app, this would be hashed
        bookings: [],
    };
    
    users.push(newUser);
    saveUsers(users);
    return newUser;
};

export const authenticateUser = (email: string, password?: string): User | null => {
    const user = findUserByEmail(email);
    if (user && user.password === password) {
        return user;
    }
    return null;
};


export const handleGoogleSignIn = (account: { name: string, email: string }): User => {
    let user = findUserByEmail(account.email);

    if (!user) {
        user = registerUser({
            name: account.name,
            email: account.email
        });
    }
    
    return user;
};


// --- Session Management ---

export const getLoggedInUser = (): User | null => {
    const email = localStorage.getItem(LOGGED_IN_USER_KEY);
    if (!email) return null;
    return findUserByEmail(email) || null;
};

export const setLoggedInUser = (email: string): void => {
    localStorage.setItem(LOGGED_IN_USER_KEY, email);
};

export const logoutUser = (): void => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
};

// --- Booking Management ---

export const addBookingToUser = (email: string, booking: Booking): User | null => {
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex > -1) {
        const user = users[userIndex];
        user.bookings.push(booking);
        // Sort bookings by date, most recent first
        user.bookings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        users[userIndex] = user;
        saveUsers(users);
        return user;
    }
    return null;
};