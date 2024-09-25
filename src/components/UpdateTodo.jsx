import { useState } from "react";
function UpdateTodo({ item, edit }) {
  const [content, setContent] = useState(item.content);

  function handelChange(e) {
    const text = e.target.value;
    setContent(text);
  }

  return (
    <div className="d-flex flex-row mt-2">
      <input type="text" onChange={handelChange} value={content} />
      <button
        className="btn-primary"
        onClick={() => {
          edit(item.id, content);
        }}
      >
        Sauvegarder
      </button>
    </div>
  );
}
export default UpdateTodo;
