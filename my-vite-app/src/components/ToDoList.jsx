// Here is the ToDoList component that is used to display the list of to-do items.
// It takes in the todos array, onDelete function, and onToggle function as props.
// It returns a ul element with the list of to-do items.
// 
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className="todoformlist">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
