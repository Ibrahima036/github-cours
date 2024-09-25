import { useState } from "react";
function FormTodo({ addTodo }) {
  const [content, setContent] = useState("");

  function handelChange(e) {
    const text = e.target.value;
    setContent(text);
  }
  function handelClick() {
    if (content) {
      addTodo(content);
      setContent("");
    }
  }
  return (
    <div className="d-flex flex-row">
      <input type="text" onChange={handelChange} value={content} />
      <button className="btn-primary" onClick={handelClick}>
        Ajouter
      </button>
    </div>
  );
}
export default FormTodo;
