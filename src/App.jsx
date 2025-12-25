import { Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import ForgotPassword from "./loginPage/ForgotPassword";
import ChangePassword from "./loginPage/ChangePassword";
import UserTable from "./components/userTable";
import AddUser from "./components/AddUser";

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/users" element={<UserTable />} />
      <Route path="/add-user" element={<AddUser />} />

    </Routes>

    
  );
}

export default App;
