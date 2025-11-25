import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import './view.css';
export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address:"",
    phonenumber:"",
    pincode:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="viewcontainer">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center1">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Name:    </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:  </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:   </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>phonenumber:   </b>
                  {user.phonenumber}
                </li>
                <li className="list-group-item">
                  <b>address:   </b>
                  {user.address}
                </li>
                <li className="list-group-item">
                  <b>pincode:    </b>
                  {user.pincode}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn3" to={"/data"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
