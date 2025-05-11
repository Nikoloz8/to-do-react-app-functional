import { useState } from 'react'
import './App.css'
import Todo from "./components/todo/Todo"

function App() {

  let [done, setDone] = useState([])
  let [todos, setTodos] = useState([])
  let [input, setInput] = useState("")

  function handleClick() {
    if (input === "") return;

    setTodos([...todos, input])
    setInput("")
  }

  return (
    <>
      <div className='container'>
        <h1>To-Do React App</h1>
        <div className='input-container'>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleClick}>Submit</button>
        </div>
        <Todo todos={todos} setDone={setDone} setTodos={setTodos} done={done}/>
      </div >
    </>
  )
}

export default App
