import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeEdit from './EmployeeEdit';

const App = () => {
  return (
    <Router>
      <div >

        <div className='bg-black flex gap-12 p-2 py-4 font-bold text-white'>
          <h1>Employee Management System</h1>

          <nav className='flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/add">Add Employee</Link>
          
          </nav>
        </div>



        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;