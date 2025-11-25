import { useState } from "react";
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from "axios";
import './Login.css';

const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const { username, password } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const [typelgn, setTypelgn] = useState("password");
  const [iconlgn, setIconlgn] = useState(<LockIcon />);
  
  const handleTogglelgn = () => {
      if (typelgn === "password") {
          setIconlgn(<LockOpenIcon />);
          setTypelgn("text");
        } else {
            setIconlgn(<LockIcon />);
            setTypelgn("password");
        }
    };
    
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/user/login", user);
    if (result.data === "Login success")
      navigate("/all-products");
    else
      setMsg(result.data);
  };

  return (
    <div className="login_container">
      <div >
        <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
          <p className="logintitle">LOGIN</p>
            <br></br>
          <div className="loginmessage">{msg}</div>
          <label className="logininput_title">Username</label>
            <br></br>
            <br></br>
          <div className="loginusrinput">
            <span>
            </span>
            <br></br>
            <input type="text" className="username" name="username" value={username} onChange={(e) => onInputChange(e)} required></input>
            <span className="usricon">
              <AccountCircleIcon />
            </span>
            
          </div>
          <label className="logininput_title">Password</label>
            <br></br>
          <div className="pwdinput">
            <span>
            </span>
            <input className="password" type={typelgn} name="password" value={password} onChange={(e) => onInputChange(e)} required>
                
            </input>
            <span className="icon" onClick={handleTogglelgn}>
              {iconlgn}
            </span>
          </div>
          <div className="lgn-btn">
            <button type="submit" className="login_btn">
              login
            </button>
          </div>
          <div className="signLogin">
            <span className="sign_up">Don't have an account? </span>
            <span>
              <Link to="/adduser" className="addlink">
                Sign Up
              </Link>
            </span>
            
          </div>
        </form>
      </div>
      <div className="loginimage">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg" width="450px" height="500px"/>
      </div>
      
    </div>
  );
};

export default Login;
