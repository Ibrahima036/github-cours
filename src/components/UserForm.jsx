import { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handelChangeName(e) {
    if (e.target.value) {
      setName(e.target.value);
    }
  }
  function handelChanceEmail(e) {
    if (e.target.value) {
      setEmail(e.target.value);
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    const newUser = {
      id: new Date(),
      name: name,
      email: email,
    };
    addUser(newUser);
    setEmail("");
    setName("");
  }
  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          id=""
          className="mt-2"
          onChange={handelChangeName}
          value={name}
        />
        <input
          type="email"
          name="email"
          id=""
          className="mt-2"
          onChange={handelChanceEmail}
          value={email}
        />
        <button className="mt-2">Soumettre</button>
      </form>
    </div>
  );
}
