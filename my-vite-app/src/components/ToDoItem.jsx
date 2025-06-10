// Here is the ToDoItem component
// It takes in a todo object, onDelete function, and onToggle function as props
// It returns a list item with a checkbox, text, and delete button
// The list item is styled using Tailwind CSS classes
// The checkbox is styled using Tailwind CSS classes
// The delete button is styled using Tailwind CSS classes
// The text is styled using Tailwind CSS classes

import { hover, motion } from "framer-motion";
import Checked from "../assets/check.png";
import Delete from "../assets/delete.png";

const ToDoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <img src={Checked} alt="" className="w-7 " />
      <motion.li
        onClick={() => onToggle(todo.id)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="tex-slate-700 ml-4 text-[17px] flex-1 cursor-pointer"
      >
        {todo.text}
      </motion.li>
      {/* Delete Button start here */}
      <button
        class="DeleteButton"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        <img src={Delete} alt="" className="w-3.5 cursor-pointer hover:scale-150" />
      </button>
    </div>
  );
};

export default ToDoItem;
