import { useState, createContext, useContext, ReactNode } from 'react';
import Toast from './Toast';

type ToastContextType = {
    addToast: (message: string, duration?: number) => void;
}

// Create a context for the toast, with an initial value of undefined
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// ToastProvider component which will wrap around the part of the app that needs to use toasts
export const ToastProvider = (props: { children: ReactNode }) => {

    const { children } = props;

    // State to keep track of the toasts
    const [toasts, setToasts] = useState<{ id: number, message: string, duration?: number }[]>([]);

    // Function to add a new toast
    const addToast = (message: string, duration?: number) => {
        const id = Date.now();  // Generate a unique id based on the current time
        setToasts([...toasts, { id, message, duration }]);
        setTimeout(() => {
            setToasts(toasts => toasts.filter(toast => toast.id !== id));  // Remove the toast after the specified duration
        }, duration || 3000);  
    };

    return (
        // Provide the addToast function to the context consumers
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <>
                {toasts.map(toast => (
                    <Toast 
                        key={toast.id} 
                        message={toast.message} 
                        duration={toast.duration} 
                        onClose={() => setToasts(toasts => toasts.filter(t => t.id !== toast.id))} 
                    />
                ))}
            </>
        </ToastContext.Provider>
    );
};

// Custom hook to use the toast context
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');  // Ensure the hook is used within a ToastProvider
    }
    return context;
};
