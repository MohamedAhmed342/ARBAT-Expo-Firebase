import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { AuthContextProvider, useAuth } from './context/authcontext';

const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated or not
        if (typeof isAuthenticated === 'undefined') return;

        const inApp = segments[0] === '(app)';
        if (isAuthenticated && !inApp) {
            // Redirect to home
            router.replace('home');
        } else if (!isAuthenticated) {
            // Redirect to signIn
            router.replace('signin');
        } else if (isAuthenticated === 'admin') {
            // Redirect to admin panel
        }
    }, [isAuthenticated]);

    return <Slot />;
};

export default function Rootlayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    );
}
