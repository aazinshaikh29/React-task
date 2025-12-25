import { useEffect, useState } from "react";
import "./UserTable.css";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Fetch Users
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  // DELETE USER
  const deleteUser = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });

    setUsers(users.filter((u) => u.id !== id));
  };

  // FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    if (filterType === "active") return user.status === "Active";
    if (filterType === "blocked") return user.status === "Inactive";
    return true;
  });

  // SEARCH LOGIC
  const finalUsers = filteredUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-table-container">
      
      <h1>User Management</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>

        <button
              className="add-btn"
              onClick={() => navigate("/add-user")}>
               Add User
        </button>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button onClick={() => setFilterType("all")} className="filter-btn">
          Show All
        </button>

        <button onClick={() => setFilterType("active")} className="filter-btn">
          Show Active
        </button>

        <button onClick={() => setFilterType("blocked")} className="filter-btn">
          Show Blocked
        </button>

      </div>

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
          {finalUsers.map((user) => (
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
                <button className="action-btn">
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

export default UserTable;
