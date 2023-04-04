import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, doneTodo } from '../../app/todoSlice';

 
function TodoItem( { id, text, done } ) {

  const dispatch = useDispatch();
  return (
    <li className={done? 'checked' : 'todo-item'} onClick={()=> dispatch( doneTodo({id}))}>
      {/* <input type="checkbox" checked={done} onChange={()=> dispatch( doneTodo({id}))} /> */}
      <span>{text}</span>
      <button onClick={() => dispatch(removeTodo({id}))}>&times;</button>

    </li>
  )
}

export default TodoItem