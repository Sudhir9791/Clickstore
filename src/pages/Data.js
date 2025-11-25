import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Data.css';
import { Button } from "@mui/material";
export default function Data() {
  const [users, setUsers] = useState([]); 

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div>
    <div className="container">
      <div >
        <center>

            <h1>E-Commerce Database Details
            <span>
            <a href="http://localhost:8080/swagger-ui/index.html#/" className="swagger">Swagger</a>
            </span></h1> 

        </center>
        <table>
          <thead>
            <tr>
              <th >User-Id</th>
              <th >Name</th>
              <th >Username</th>
              <th >Email</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td key={index}>
                  {index + 1}
                </td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>  
                <td>
                  
                  <Link
                    className="btn_view"
                    to={`/adduser`}
                    >
                    Add
                  </Link>
                  <Link
                    className="btn_view"
                    to={`/viewuser/${user.id}`}
                    >
                    View
                  </Link>
                  <Link
                    className="btn_edit"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn_delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
}
