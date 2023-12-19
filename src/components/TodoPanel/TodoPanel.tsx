import React from "react";

import s from './TodoPanel.module.scss'

const DEFAULT_TODO = {
    name: '',
    desc: ''
}

export const TodoPanel = () => {
    cosnt[todo, setTodo] = React.useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })
    }

    return (
        <div className={s.panel}>
            <div className="panel__item">
                <label htmlFor="name">
                    <b>Название</b>
                    <input type="text" />
                </label>
            </div>
            <div className="panel__item">
                <label htmlFor="desc">
                    <b>Описание</b>
                    <input type="text" />
                </label>
            </div>
            <button>Добавить</button>
        </div>
    )
}