import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || []);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((_, index) => index !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.dob}</td>
              <td>{employee.contact}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>

              <td className="flex gap-2">
                <Link className="bg-green-600 text-white rounded-sm p-1 " to={`/edit/${index}`}>Edit</Link>
                <button className="bg-red-500 text-white rounded-sm p-1" onClick={() => handleDelete(index)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default EmployeeList;

