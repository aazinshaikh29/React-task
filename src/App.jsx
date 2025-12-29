import { Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import ForgotPassword from "./loginPage/ForgotPassword";
import ChangePassword from "./loginPage/ChangePassword";
import UserTable from "./components/UserManagement";
import AddUser from "./components/AddUser";
import NotificationUI from "./components/NotificationUI";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/users" element={<UserTable />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/notifications" element={<NotificationUI />} />
      <Route path="/profilecard" element={<ProfileCard />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}

export default App;
