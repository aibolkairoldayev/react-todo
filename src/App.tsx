import React from 'react';

import { Header } from './components/Header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'
import './App.css';


export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const addTodo = ({ name, desc }: Omit<Todo, 'checked', 'id'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, desc, name, checked: false }]);
  }
  return (
    <div className="App">
      <Header todoCount={todos.length} />
      <TodoPanel addTodo={addTodo} />
    </div>
  );
}




export default App;
