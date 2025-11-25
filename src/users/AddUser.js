import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './add.css';
export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password:"",
    paymentoption:"",
    address:"",
    phonenumber:"",
    pincode:"",
  });

  const { name, username, email,password,address,phonenumber,pincode } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/data");
  };

  return (
    <div className="addcontainer">
      <div className="row">
        <div className="col">
          <h2 className="text-center">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
              <div className="mb-3">
              <label htmlFor="Address" className="form-label">
              Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
              <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label">
              phonenumber
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phonenumber"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
              <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
              pincode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your pincode"
                name="pincode"  
                inputmode="numeric"
               maxlength="6"
                value={pincode}
                onChange={(e) => onInputChange(e)}

                required
              />
            </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/data">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
