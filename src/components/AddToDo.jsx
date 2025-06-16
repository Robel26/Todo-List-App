// Inside fo this AddToDo component we are using the useState hook to manage the state of the input field and the form submission.
// The handleSubmit function is called when the form is submitted, and it checks if the input field is not empty before adding the new todo item to the list.
// The AddToDo component returns a form with an input field and a button to submit the form.
// The form is styled using Tailwind CSS classes.
// The input field is styled using Tailwind CSS classes.
// The button is styled using Tailwind CSS classes.


import { useState } from "react";

const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };
  // Todo form starting point
  return (
    <form className="todoform flex items-center my-7 bg-gray-200 rounded-full" onSubmit={handleSubmit}>
      <input
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600  "
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='border-none rounded-full bg-green-600 hover:bg-green-700 w-32 h-14 text-white text-lg font-medium cursor-pointer'
       type="submit">ADD +</button>
    </form>
  );
};

export default AddToDo;
