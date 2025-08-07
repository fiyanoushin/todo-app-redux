// import React from 'react'
// import { useState,useEffect } from 'react'

// const App = () => {

//   const[time,setTime]=useState(0)
//   const[run,setRun]=useState(false)
//   const[back,setBack]=useState(false)
//   let interval;
  
//   useEffect(()=>{
  
//     if(run){
//        interval=setInterval(() => {
//         setTime((prev)=>{
//           if(back){
//            return prev-1;
//           }
//            return prev+1;
//         })
//       }, 1000);
     
//     }
    

//   },[run])

//   const handleStart=()=>{
//     setRun(true)
//   }

//   const handleStop=()=>{
//     setRun(false)
//     clearInterval(interval)
//   }

//   const handleBack=()=>{
//     setRun(true)
//     setBack(true)
    
//   }
//   return (
//     <div>
// <h1>{time}</h1>
// <button onClick={handleStart}>Start</button>
// <button onClick={handleStop}>Stop</button>
// <button onClick={handleBack}>Backward</button>

//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,toggleTodo,deleteTodo } from './todoSlice';

export default function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 Redux Toolkit Todo App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '8px 0' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
