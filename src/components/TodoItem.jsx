function TodoItem({ item, deleteTodo, completed, toggleEdit }) {
  return (
    <div className="d-flex flex-row mt-2">
      <span>{item.isCompleted ? "✔" : ""}</span>
      <li className="flex-fill">{item.content}</li>
      <button className="btn-secondary" onClick={() => deleteTodo(item.id)}>
        Delete
      </button>
      <button className="btn-success" onClick={() => completed(item.id)}>
        Ok
      </button>
      <button className="btn-success" onClick={() => toggleEdit(item.id)}>
        Edit
      </button>
    </div>
  );
}

export default TodoItem;
