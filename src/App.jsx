import { Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import ForgotPassword from "./loginPage/ForgotPassword";
import ChangePassword from "./loginPage/ChangePassword";
import UsersTable from "./components/UserTable";


function App(props) {
  return (
  
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/users" element={<UsersTable />} />
    </Routes>
    
  );
}

export default App;
