import { useState } from 'react';
import TodoList from './features/TodoList/TodoList';
import AddTodo from './features/Addtodo/AddTodo';
import { addTodo } from './app/todoSlice';
import { useDispatch } from "react-redux";

function App() {

  const [ text, setText ] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('')
  }

  return (
    <div className="App">
    <AddTodo addTodo={addTask} text={text} setText={setText} />  
    <TodoList />
    </div>
  );
}

export default App;
