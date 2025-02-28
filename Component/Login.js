import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const UserType = ["Admin", "Incharge", "User", "Doctor"];
  const [user, setUser] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function Login(e) {
    e.preventDefault();

    const data = {
      usertype: user,
      email: userid,
      password: password,
    };

    axios
      .post('http://localhost:8080/LoginVerify', data)
      .then((res) => {
        sessionStorage.setItem("UserId", userid);

        if (res.data === "Admin") {
          alert("Login Successfully");
          navigate("/AdminDashboard/Category");
        } else if (res.data === "Incharge") {
          alert("Login Successfully");
          navigate("/InchargeDahsboard/ViewAnimals");
        }
        else if (res.data === "Doctor") {
          alert("Login Successfully");
          navigate("/DoctorDashboard/AnimalHealthCheck");
        }

        else if (res.data === "User") {
          alert("Login Successfully");
          navigate("/UserDashboard/AdopAnimals");
        }
        else {
          alert(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something Went to wrong");
      });
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="text-white">Login</h2>
          <form>
            <div className="form-group">
              <label className="form-label text-white">Usertype</label>

              <select
                className="form-select mb-3 text-center "
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              >
                <option selected value="" hidden>
                  ----Select----
                </option>
                {UserType.map((user, index) => {
                  return (
                    <option key={index} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group">
              <label className="text-white">EmailID</label>
              <input type="text" id="username" name="username" value={userid} onChange={(e) => setUserid(e.target.value)} required />
            </div>
            <div className="input-group">
              <label className="text-white">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="buttons" onClick={Login}>Login</button>
            <Link className="btn btn-danger w-100 p-2 py-2 mt-3" to='/'>Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
