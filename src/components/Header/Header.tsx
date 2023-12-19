import React from "react";

import s from './Header.module.scss'

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
    <div className={s.header}>
        <div className={s.header__title}>
            Список задач
        </div>
        <div className={s.header__count}>
            Количество выполненных задач <b>{todoCount}</b>
        </div>
    </div>
)