import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'

function App() {
  const [input, setInput] = useState("");
  const [second, setSecond] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input !== "" && second !== "") {
      dispatch(addTodo({ text: input, time: second }));
      setInput("");
      setSecond("");
    }
  };

  return (

    <div className="container">
      <h2>To-do app</h2>
      <input type="text"
        placeholder="Enter the todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="time"
        placeholder="HH:MM"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <button className="add-btn" type="submit" onClick={handleAdd}>Add</button>

      {todos.map((todo, index) => (
        <div className="card" key={index}>
          <p>{todo.text}</p>
          <p>{todo.time}</p>
          <button className="delete-btn" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
        </div>
      ))}
    </div>

  )
}

export default App
