import React, { useEffect } from 'react';
import './ToastStyles.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number; // duration in milliseconds
    onClose: () => void;
}

const Toast = ({ message, type, duration = 3000, onClose }: ToastProps): JSX.Element => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast ${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Toast;
