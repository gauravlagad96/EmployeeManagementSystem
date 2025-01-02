import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import EmployeeEdit from "./EmployeeEdit";

// const App = () => {
//   return (
//     <Router>
//       <div style={{ padding: "20px" }}>
//         <h1>Employee Management System</h1>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/add">Add Employee</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<EmployeeList />} />
//           <Route path="/add" element={<EmployeeForm />} />
//           <Route path="/edit/:id" element={<EmployeeEdit />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// EmployeeList.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || []);

//   const handleDelete = (id) => {
//     const updatedEmployees = employees.filter((_, index) => index !== id);
//     setEmployees(updatedEmployees);
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table border="1" style={{ width: "100%", textAlign: "left" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>DOB</th>
//             <th>Contact</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={index}>
//               <td>{employee.name}</td>
//               <td>{employee.dob}</td>
//               <td>{employee.contact}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <Link to={`/edit/${index}`}>Edit</Link>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;

// EmployeeForm.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EmployeeForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     dob: "",
//     contact: "",
//     email: "",
//     address: "",
//     department: "",
//     designation: "",
//     salary: "",
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const employees = JSON.parse(localStorage.getItem("employees")) || [];
//     employees.push(formData);
//     localStorage.setItem("employees", JSON.stringify(employees));
//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact"
//           value={formData.contact}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;

// EmployeeEdit.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EmployeeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    department: "",
    designation: "",
    salary: "",
  });

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    setFormData(employees[id]);
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees[id] = formData;
    localStorage.setItem("employees", JSON.stringify(employees));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
