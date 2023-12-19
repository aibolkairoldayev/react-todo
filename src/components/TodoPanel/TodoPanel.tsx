import React from "react";

import { Button } from "../Button/Button";
import s from './TodoPanel.module.scss'

const DEFAULT_TODO = {
    name: '',
    desc: ''
};

interface TodoPanelProps {
    addTodo: ({ name, desc }: Omit<Todo, 'checked' | 'id'>) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO);


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const onClick = () => {
        addTodo({ name: todo.name, desc: todo.desc });
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className={s.panel}>
            <div className="panel__item">
                <label htmlFor="name">
                    <b>Название</b>
                    <input type="text" id="name" value={todo.name} name="name" onChange={onChange} />
                </label>
            </div>
            <div className="panel__item">
                <label htmlFor="desc">
                    <b>Описание</b>
                    <input type="text" id="desc" value={todo.desc} name="desc" onChange={onChange} />
                </label>
            </div>
            <Button color="blue"
                onClick={onClick}
            >Добавить</Button>
        </div>
    )
}