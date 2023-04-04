import React from 'react'


function AddTodo( {text, addTodo, setText}) {




  return (
    <div className='add-todo'>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>

      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default AddTodo