import React from "react";

import s from "./TodoList.module.scss"

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
    <div className={s.list}>
        {todos.map((todo) => (
            <div className={s.list__name}>{todo.name}</div>
        ))}
    </div>
)