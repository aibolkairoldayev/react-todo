import React from "react";

import s from './TodoItem.module.scss'
import { Button } from "../../Button/Button";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div className={s.item}>
            <div className={s.item__info}>
                <div aria-hidden className={s.item__name}>
                    {todo.name}
                </div>
                <div aria-hidden className={s.item__desc}>
                    {todo.desc}
                </div>
            </div>
            <div className={s.item__btns}>
                <Button color="yellow">Изменить</Button>
                <Button color="red">Удалить</Button>
            </div>
        </div>
    )
}