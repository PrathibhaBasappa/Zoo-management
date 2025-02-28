import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Registration() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  function UserReigistration(e) {

    e.preventDefault();

    if (!emailPattern.test(email)) {
      setError('Email must contain at least 5 alphabetic characters before the "@" symbol.');
      return;
    }

    const data = { name, password, phone, email, address }

    axios
      .post("http://localhost:8080/UserReigistration", data)
      .then((res) => {
        console.log(res.data)
        alert(res.data);
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



  return (
    <div>
      <div className='reg'>
        <div className="reg-box">
          <div className="col-sm-12">
            <div className=''>
              <div className="">
                <h3 className='text-center text-white'>Register Now</h3>
              </div>
              <hr className='text-white' />

              <form onSubmit={UserReigistration}>
                <div className="card-body">

                  <div className="form-outline mb-1">
                    <label className='form-label text-white'>Enter Name</label>

                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />

                  </div>
                  <div className="form-outline mb-1">
                    <label className='form-label text-white'>Enter Emailid</label>

                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {error && <p className="text-white">{error}</p>}

                  </div>
                  <div className="form-outline mb-1">
                    <label className='form-label text-white'>Enter Password</label>

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
                    <label className='form-label text-white'>Enter Phone</label>
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
                    <label className='form-label text-white'>Enter Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}

                      required
                    />
                  </div>


                  <div className="mt-3">
                    <button className="btn btn-secondary w-100" type="submit">
                      Submit
                    </button>
                    <Link className="btn btn-danger w-100 p-2 py-2 mt-2" to='/'>Back</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
