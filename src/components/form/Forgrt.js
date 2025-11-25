import "./forget.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Forgotpassword = () => {
  const [email, setemail] = useState("");
  const [otp, setotp] = useState("");
  const saveemail = (e) => {
    setemail(e.target.value);
  }
  const saveotp = (e) => {
    setotp(e.target.value);
  }
  const validateinput = (e) => {
    if (email == "") {
      alert("please fill the Email");
    }
    if (otp == "") {
      alert("please fill the OTP");
    }
  }
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Forgot Password</center>
          <form>
            <div class="inputlgn">
              <span>
                <label for="email">Email</label>
              </span>
              <span >
                <img  className="forget-email" src="email.webp" height="50" width="50"/>
              </span>
              <br></br>
              <input type="email" id="email" onChange={saveemail}></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">OTP</label>
              </span>
              <span >
                <img className="forget-email" src="otp.jpg" height="40" width="40" />
              </span>
              <br></br>
              <input type="password" id="password" onChange={saveotp}></input>
              <br></br>
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                <Link to="/login">
                  <button onClick={validateinput}>Reset</button>
                </Link>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Not Receiving an OTP? </span>
                <Link to="/resetpassword" className="font1">
                  Resend
                </Link>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;