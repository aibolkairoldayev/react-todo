import React from "react";

import s from './Button.module.scss'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color: 'yellow' | 'blue' | 'red'
}

export const Button: React.FC<ButtonProps> = ({ children, color, onClick, ...props }) => {
    const className = `${s.button} ${s[`button__${color}`]}`;

    return (
        <button className={className} onClick={onClick} {...props}>
            {children}
        </button>
    )
}