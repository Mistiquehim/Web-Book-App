import React from 'react';

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {

    const { type, onClick, className, children, disabled } = props;

    return (
        <button type={type} onClick={onClick} className={className} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
