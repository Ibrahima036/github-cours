import generateId from "../Utils/generateId";
import FormTodo from "./FormTodo";
import TodoItem from "./TodoItem";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";

function TodoList() {
  const [todo, setTodo] = useState([]);

  function addTodo(content) {
    const newTodo = {
      id: generateId(),
      content,
      isCompleted: false,
      edit: false,
    };

    setTodo([...todo, newTodo]);
  }

  function deleteTodo(id) {
    setTodo(todo.filter((t) => t.id !== id));
  }

  function completedTodo(id) {
    setTodo(
      todo.map((t) =>
        t.id === id
          ? {
              ...t,
              isCompleted: true,
            }
          : t
      )
    );
  }

  function toggleEdit(id) {
    setTodo(todo.map((t) => (t.id === id ? { ...t, edit: true } : t)));
  }
  function edit(id, newContent) {
    setTodo(
      todo.map((t) =>
        t.id === id ? { ...t, content: newContent, edit: false } : t
      )
    );
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <ul>
        {todo.map((item) =>
          item.edit ? (
            <UpdateTodo key={item.id} item={item} edit={edit} />
          ) : (
            <TodoItem
              key={item.id}
              item={item}
              deleteTodo={deleteTodo}
              completed={completedTodo}
              toggleEdit={toggleEdit}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default TodoList;
