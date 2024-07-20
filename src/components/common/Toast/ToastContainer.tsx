// import React, { useState } from 'react';
// import Toast from './Toast';
// import styles from './ToastContainer.module.scss';

// interface ToastMessage {
//     id: number;
//     message: string;
//     type: 'success' | 'error' | 'info' | 'warning';
// }

// const ToastContainer: React.FC = () => {
//     const [toasts, setToasts] = useState<ToastMessage[]>([]);

//     const addToast = (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
//         const id = Date.now();
//         setToasts([...toasts, { id, message, type }]);
//     };

//     const removeToast = (id: number) => {
//         setToasts(toasts.filter(toast => toast.id !== id));
//     };

//     return (
//         <div className={styles.toastContaine}>
//             {toasts.map(toast => (
//                 <Toast
//                     key={toast.id}
//                     message={toast.message}
//                     type={toast.type}
//                     onClose={() => removeToast(toast.id)}
//                 />
//             ))}
//             <button onClick={() => addToast('Success Message', 'success')}>Show Success Toast</button>
//             <button onClick={() => addToast('Error Message', 'error')}>Show Error Toast</button>
//             <button onClick={() => addToast('Info Message', 'info')}>Show Info Toast</button>
//             <button onClick={() => addToast('Warning Message', 'warning')}>Show Warning Toast</button>
//         </div>
//     );
// };

// export default ToastContainer;


// ToastContainer.tsx

// import Toast from './Toast';
import './ToastStyles.css';

export type ToastMessage = {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

const ToastContainer = () => {
    return (
        <div className="toast-container"></div>
    );
};

export default ToastContainer;
