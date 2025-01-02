import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(formData);
    localStorage.setItem("employees", JSON.stringify(employees));
    navigate("/");
  };

  return (
    <div className="bg-slate-400 grid gap-2">
      <h2 className="text-center font-bold text-2xl">Add Employee</h2>
      <br />
      
      <form onSubmit={handleSubmit} className="grid gap-4   place-content-center ">
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

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Enter department"
          value={formData.department}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Enter designation "
          value={formData.designation}
          onChange={handleInputChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Enter designation "
          value={formData.salary}
          onChange={handleInputChange}
          required
        />

        <button className="bg-black text-white hover:bg-red duration-500" type="submit">Add Employee</button>
      </form>

    </div>
  );
};

export default EmployeeForm;
