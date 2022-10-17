import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Companies from './pages/Companies';
import Employees from './pages/Employees';
import Navbar from './components/Navbar';
import EmployeeDetail from './pages/EmployeeDetail';
import AddCompany from './pages/AddCompany';
import AddEmployee from './pages/AddEmployee';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import EditProfile from './pages/EditProfile';

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div id='app-body'>
      <Navbar />
      <ToastContainer className="ToastContainer" theme="light" />
      <div style={{ display: "flex" }}>
        {user && <Sidebar />}
        <div className={user ? "container main-container" : "container main-containerWithUser"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employee/:employee_Id" element={<EmployeeDetail />} />
            <Route path="/addcompany" element={<AddCompany />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
