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
       <h2>Below is the form</h2>
            <form onSubmit={handleSubmit} className="bg-black">
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
                <button className="bg-black text-white hover:bg-red duration-500" type="submit">Update Employee</button>
            </form>

        </div>
    );
};

export default EmployeeEdit;
