import React from "react";
import { Link } from "react-router-dom";
import "./success.css"
function Succesfull () {
    return(
        <div>

            <div className="Tick">
            </div >
            <img className="pay_tick" src="https://cdn.dribbble.com/users/4358240/screenshots/14825308/media/84f51703b2bfc69f7e8bb066897e26e0.gif"/>
        <center className="below_succ">
            
            <div>
                <h1>Payment Successfull!!</h1>
            </div>
            
            
                <Link to='/all-products'>

     <div  >
        <button className="return-home">
            Return home
        </button>
     </div>
    </Link>
        </center>
        </div>
    )
}
export default Succesfull;