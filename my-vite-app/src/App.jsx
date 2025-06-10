// Here is the App component that is the root component of the application.
// It renders the Header, AddToDo, and ToDoList components.
// It also handles the state of the to-do list and the form submission.
// The App component returns a div element with the background video, header, and form.
// The form is styled using Tailwind CSS classes and the video is styled using internal CSS.
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Video from "./assets/1550080-uhd_3840_2160_30fps.mp4";


function App() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="todoapp place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] mt-9 rounded-xl">
        <Header />
        <AddToDo onAdd={addTodo} />
        <ToDoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
