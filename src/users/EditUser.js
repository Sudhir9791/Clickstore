import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './edit.css';
export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address:"",
    phonenumber:"",
    pincode:"",
  });

  const { name, username, email,address,phonenumber,pincode } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/data");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="editcontainer">
      <div className="erow">
        <div className="ceol">
          <h2 className="text">Edit User</h2>

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
              />
              
            </div>
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
              <label htmlFor="pincode" className="pincode">
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
            <button type="submit" className="btn-outline-primary">
              Submit
            </button>
            <Link className="btn-outline-danger" to="/data">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
