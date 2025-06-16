// Here is the ToDoItem component
// It takes in a todo object, onDelete function, and onToggle function as props
// It returns a list item with a checkbox, text, and delete button
// The list item is styled using Tailwind CSS classes
// The checkbox is styled using Tailwind CSS classes
// The delete button is styled using Tailwind CSS classes
// The text is styled using Tailwind CSS classes
// The list item is animated using Framer Motion
// It also add circle  to not completed task and check to completed task

import { motion } from "framer-motion";
import Checked from "../assets/check.png";
import Circle from "../assets/circle.png";
import Delete from "../assets/delete.png";

const ToDoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      {/* Toggle Complete Icon */}
      <img
        src={todo.completed ? Checked : Circle}
        alt="Toggle"
        className="w-7 cursor-pointer transition-opacity"
        onClick={() => onToggle(todo.id)}
      />

      {/* Task Text with Strikethrough if Completed */}
      <motion.div
        onClick={() => onToggle(todo.id)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className={`ml-4 text-[17px] flex-1 cursor-pointer ${
          todo.completed ? "line-through text-slate-700" : "text-slate-900"
        }`}
      >
        {todo.text}
      </motion.div>

      {/* Delete Button */}
      <button
        className="DeleteButton"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        <img
          src={Delete}
          alt="Delete"
          className="w-3.5 cursor-pointer hover:scale-150"
        />
      </button>
    </div>
  );
};

export default ToDoItem;


