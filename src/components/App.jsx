import { useEffect, useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getUserFetch() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          setError("Une erreur est survenu!");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUserFetch();
  }, []);

  function handelChange(e) {
    const text = e.target.value;
    if (text) {
      setSearch(text);
    }
  }
  function handelClick(search) {
    const usersFilter = users.filter((user) => user.name === search);
    setUsers(usersFilter);
    setSearch("");
  }

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div className="container">
      <UserForm addUser={addUser} />
      <input type="text" value={search} onChange={handelChange} />{" "}
      <button className="mt-2" onClick={() => handelClick(search)}>
        Rechercher
      </button>
      <h1>{error ? error : ""}</h1>
      <h1>{loading ? "chargement ..." : ""}</h1>
      {users.map((user) => (
        <UserList key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
