import "./Navbar.css";
import image1 from "../assets/profile1.png";
import image2 from "../assets/profile2.png";
import image3 from "../assets/profile3.png";
import image4 from "../assets/profile4.png";

const Navbar = () => {
  const users = [
    { name: "Dustin", role: "Developer", img: image1 },
    { name: "Steve", role: "Designer", img: image2 },
    { name: "Max", role: "Tester", img: image3 },
    { name: "Mike", role: "UI Designer", img: image2 },
    { name: "Nancy", role: "Backend", img: image4 },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2 className="logo">My Website</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Profile</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* LAYOUT WRAPPER */}
      <div className="layout">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Menu</h3>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* PROFILE CARDS */}
        <div className="profile-row">
          {users.map((u, index) => (
            <div className="profile-card" key={index}>
              <img src={u.img} className="profile-img" alt={u.name} />
              <h3>{u.name}</h3>
              <p>{u.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
