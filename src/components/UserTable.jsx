import { useEffect, useState } from "react";
import "./UserTable.css";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch Data From JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const editUser = (id) => {
    console.log("Edit User:", id);
  };

  const deleteUser = (id) => {
    console.log("Delete User:", id);
  };

  return (
    <div className="user-table-container">
      <h1>User Table</h1>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={user.status === "Inactive" ? "inactive-row" : ""}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <span
                  className={`status-badge ${
                    user.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td>
                <button
                  className="action-btn"
                  onClick={() => editUser(user.id)}
                >
                  <FiEdit />
                </button>

                <button
                  className="action-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
