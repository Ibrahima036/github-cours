export default function UserList({ name, email }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <ul>
        <li>
          <span>Nom : </span>
          {name}
        </li>
        <li>
          <span>Email : </span>
          {email}
        </li>
      </ul>
      <hr />
    </div>
  );
}
