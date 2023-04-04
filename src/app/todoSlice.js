import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text,
                done: false
            });
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
  
        doneTodo(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
              todo.done = !todo.done;
            }
          },
          
          setFilter(state, action) {
            state.filter = action.payload;
        }
    }
})
export const {addTodo, removeTodo, doneTodo, setFilter} = todoSlice.actions;
export default todoSlice.reducer;