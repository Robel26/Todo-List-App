# 📝 React To-Do List App

A simple, elegant To-Do List application built with **React**, **Tailwind CSS**, and **Vite**. This app allows users to manage tasks by adding, deleting and  all wrapped in a responsive UI with a video background.
## 🚀 Features
- Add and remove to-do items
- Responsive and clean UI using Tailwind CSS
- Styled video background for aesthetic appeal
## 🛠️ Built With
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
## 📂 Project Structure
src/
│
 components/
│  Header.jsx // Displays the title "📝 To-Do List"
│  AddToDo.jsx // Contains input field and submit button
│  ToDoItem.jsx // Represents a single todo item (checkbox, text, delete button)
│  ToDoList.jsx // Renders list of ToDoItem components
│
 App.jsx // Root component, manages state and renders layout
 index.css // Global CSS styles including Tailwind base styles
└ main.jsx // Entry point, renders <App />

## 📋 Component Overview

### `Header.jsx`
- Renders an `<h1>` element with the title "📝 To-Do List"
- Styled using global CSS
### `AddToDo.jsx`
- Uses `useState` to manage input field state
- Submits new todo if input is not empty
- Contains a form with an input field and a submit button
- Styled using Tailwind CSS
### `ToDoItem.jsx`
- Accepts `todo`, `onDelete`, and `onToggle` as props
- Renders:
  - A checkbox (toggles completion)
  - Task text
  - Delete button
- Styled using Tailwind CSS
### `ToDoList.jsx`
- Accepts `todos`, `onDelete`, and `onToggle` as props
- Renders a list of `ToDoItem` components
### `App.jsx`
- Root component that:
  - Manages todos with `useState`
  - Renders `Header`, `AddToDo`, and `ToDoList`
  - Displays a background video with internal CSS
## 📦 Installation
1. Clone the repo:
   ```bash
   git clone  https://github.com/Robel26/ToDo-List-App.git
   cd react-todo-list
Install dependencies:
npm install
Run the development server:
npm run dev
🌐 Deployment
To create a production build:
npm run build
You can then deploy the dist/ folder to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages).

🎥 Background Video
The app includes a full-screen background video using an HTML <video> element styled with internal CSS. It adds a modern, visual appeal without affecting functionality.

✨ Acknowledgements
Tailwind CSS for utility-first styling
React for the powerful component-based framework
Vite for blazing-fast development setup

🧑‍💻 Author
Robel A.

