import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from '../../app/todoSlice'

function TodoList() {

  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  }


  const todos = useSelector(state => state.todos.todos)
  const filter = useSelector(state => state.todos.filter);

  let filteredTodos = todos;

  if (filter === 'completed') {
    filteredTodos = todos.filter(todo => todo.done);
  } else if (filter === 'uncompleted') {
    filteredTodos = todos.filter(todo => !todo.done);
  }

  return (

    <>
    <select onChange={ handleFilterChange }>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
    </select>

    <ul className='todo-list'>
      {
        filteredTodos?.map(todo => <TodoItem key={todo.id} {...todo} />)
      }
    </ul>
  </>
  )
}

export default TodoList