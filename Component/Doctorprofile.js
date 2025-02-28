import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Doctorprofile() {
 

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
  
    function updatedoctorprofile(e) {
  
        e.preventDefault();
  
        if (!emailPattern.test(email)) {
            setError('Email must contain at least 5 alphabetic characters before the "@" symbol.');
            return;
        }
  
        const data = { name, phone, email, address }
  
        axios
            .put(`http://localhost:8080/updatedoctorprofile/${iemail}`, data)
            .then((res) => {
               
                alert(res.data);
                GetDoctorsbyemail()
               
            })
            .catch((error) => {
                console.log(error);
                alert("Failed");
            });
    }
  
    const iemail=sessionStorage.getItem("UserId")
  
    function GetDoctorsbyemail() {
       
        axios.get(`http://localhost:8080/GetDoctorsbyemail/${iemail}`)
            .then((res) => {
                setName(res.data.name);
                setPhone(res.data.phone);
                setAddress(res.data.address);
                setEmail(res.data.email);
            });
    }
  
  
    const emailPattern = /^(?=[a-zA-Z]*[a-zA-Z])[a-zA-Z0-9._%+-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (emailPattern.test(value)) {
            setError('');
        } else {
            setError('Email must contain at least 5 alphabetic characters before the "@" symbol.');
        }
    };
  
  
    useEffect(() => {
        GetDoctorsbyemail();
    }, []);
  
    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Update Profile</h3>
                        </div>
                        <hr />
  
                        <form onSubmit={updatedoctorprofile}>
                            <div className="card-body">
  
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Name</label>
  
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
  
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Emailid</label>
  
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                    {error && <p className="text-danger">{error}</p>}
  
                                </div>
                                
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        pattern="[6-9][0-9]{9}"
                                        title="Phone number must start with a digit from 6 to 9 and contain exactly 10 digits."
                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
  
                                        required
                                    />
                                </div>
  
  
                                <div className="mt-2 d-flex justify-content-end">
                                    <button className="btn btn-primary" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    )
  }
  
