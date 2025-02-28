import axios from 'axios';
import React, { useState } from 'react'

export default function UpdateDoctorPassword() {
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
  
    function UpdatePassword(e) {
      e.preventDefault();
      debugger
      const id = sessionStorage.getItem("UserId");
      const data = { password };
      axios.put(`http://localhost:8080/updatedoctorpassword/${newpassword}/${id}`, data)
        .then((res) => {
          alert(res.data);
          ClearAll();
        })
        .catch((err) => {
            alert(err.response.data);
        });
    }
    
  
    function ClearAll() {
      setPassword("")
      setNewPassword("")
    }
  
    return (
      <div>
        <div className="col-sm-6 mt-5 offset-3">
          <div className="card">
            <h4 className='text-center p-2'>Update Password</h4>
  
            <form onSubmit={UpdatePassword}>
              <div className="card-body">
                <div className="form-outline">
                  <label>Enter Old Password</label>
                  <input type="password" className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required/>
                </div>
              </div>
              <div className="card-body">
                <div className="form-outline">
                  <label>Enter New Password</label>
                  <input type="password" className='form-control'
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}  
                    pattern="^(?=.*[a-zA-Z]{3})(?=.*\d{3}).{6,}$"
                    title="Password must have at least 6 characters with 3 alphabets and 3 digits." required/>
                </div>
              </div>
              <div className='py-2'>
                <button className="btn btn-success p-2 me-3 float-end mb-2" type='submit'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  