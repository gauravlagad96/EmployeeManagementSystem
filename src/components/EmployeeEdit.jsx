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

            <form onSubmit={handleSubmit} className="gap-4 grid">
                <div>
                    <span>Full Name: </span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                </div>
                <div>
                    <span>Date : </span>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                    />

                </div>
                <div>
                    <span>Contact : </span>
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>          
                    <span>Mail : </span>
                        <input
                    type="email"
                    name="email"
                    
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                </div> 

                <div>          
                    <span>Address : </span>
                        <input
                    type="text"
                    name="address"
                    placeholder="Email"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
                </div> 


                <div>          
                    <span>Department : </span>
                        <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                />
                </div> 

                <div>          
                    <span>designation : </span>
                        <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                />
                </div> 

                <div>          
                    <span>salary : </span>
                        <input
                    type="text"
                    name="designation"
                    value={formData.salary}
                    onChange={handleInputChange}
                    required
                />
                </div> 




                 <button className="bg-green-500  text-white hover:bg-red duration-500" type="submit">Update Employee</button>
            </form>

        </div>
    );
};

export default EmployeeEdit;
