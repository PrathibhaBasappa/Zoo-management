import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Incharge() {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    function AddIncharge(e) {

        e.preventDefault();

       
        const data = { name, password, phone, email, address }

        axios
            .post("http://localhost:8080/AddIncharge", data)
            .then((res) => {
                console.log(res.data)
                alert(res.data);
                GetIncharge()
                clearAll()
            })
            .catch((error) => {
                console.log(error);
                alert("Failed");
            });
    }

    function clearAll() {
        setName("");
        setPassword("");
        setPhone("");
        setEmail("");
        setAddress("");

    }

    function GetIncharge() {

        axios.get('http://localhost:8080/GetIncharge')
            .then((res) => {
                setList(res.data);
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
        GetIncharge();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Add Incharge</h3>
                        </div>
                        <hr />

                        <form onSubmit={AddIncharge}>
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
                                    <label className='form-label'>Enter Password</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        pattern="^(?=.*[a-zA-Z]{3})(?=.*\d{3}).{8,}$"
                                        title="Password must have at least 8 characters with 3 alphabets and 3 digits and 1 Uppercase and 1 special character"
                                    />

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
                <div className="col-sm-10 mt-5 lbl offset-1">
                    <div className="card">
                        <div className=" text-center bg-danger text-white">
                            <h4 className="text-center mt-2"> Added Incharge </h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>
                               
                                <th> Name </th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>
                                  
                                    <td>{lst.name}</td>
                                    <td>{lst.email}</td>
                                    <td>{lst.phone}</td>
                                    <td>{lst.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
