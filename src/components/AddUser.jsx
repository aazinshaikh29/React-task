import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.role) {
      setError("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    let nextId = 1;
    const numericUsers = data.filter((u) => !isNaN(u.id));

    if (numericUsers.length > 0) {
      nextId = Math.max(...numericUsers.map((u) => Number(u.id))) + 1;
    }

    const newUser = { ...user, id: nextId };

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    alert("User Added Successfully 👍");
    navigate("/users");
  };

  return (
    <div className="user-table-container">
      <h1>Add New User</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="add-user-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Role</label>
        <input
          type="text"
          name="role"
          placeholder="Enter role"
          value={user.role}
          onChange={handleChange}
        />
       
        <label>Status</label>
        <select name="status" value={user.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit" className="continue-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
