import styles from './Toast.module.scss';

type ToastProps = {
    message: string;
    duration?: number;
    onClose: () => void;
}

const Toast = (props: ToastProps) => {

    const { message } = props;

    return (
        <div className={`${styles.toast}`}>
            {message}
        </div>
    );
};

export default Toast;

