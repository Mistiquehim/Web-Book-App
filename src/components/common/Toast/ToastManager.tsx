import { useState, createContext, useContext, ReactNode } from 'react';
import Toast from './Toast';

type ToastContextType = {
    addToast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = (props: { children: ReactNode }) => {

    const { children } = props;
    const [toasts, setToasts] = useState<{ id: number, message: string, duration?: number }[]>([]);

    const addToast = (message: string, duration?: number) => {
        const id = Date.now();
        setToasts([...toasts, { id, message, duration }]);
        setTimeout(() => {
            setToasts(toasts => toasts.filter(toast => toast.id !== id));
        }, duration || 3000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <>
                {toasts.map(toast => (
                    <Toast key={toast.id} message={toast.message} duration={toast.duration} onClose={() => setToasts(toasts => toasts.filter(t => t.id !== toast.id))} />
                ))}
            </>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
