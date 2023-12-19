import React from 'react';

import { Header } from './components/Header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'
import './App.css';


export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST)
  return (
    <div className="App">
      <Header todoCount={todos.length} />
      <TodoPanel />
    </div>
  );
}




export default App;
