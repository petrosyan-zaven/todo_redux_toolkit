import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {

  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className='todo-list'>
      {
        todos?.map(todo => <TodoItem key={todo.id} {...todo} />) 
      }
    </ul>
  )
}

export default TodoList