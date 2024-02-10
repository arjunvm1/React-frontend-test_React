import React from "react";
import pic1 from "../assets/celeb.png";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="row">
        <div className="col">
         <form>
              <h1>Unlock Exclusive Benefits</h1>
              <br />
              <div className="number">
                <h4>NUMBER</h4>
                <input type="text" placeholder="+91 India" className="ipone" />
                <input type="text" placeholder="9645789210" className="iptwo"/>
              </div>
              <br />
              <div className="name">
                <h4>NAME</h4>
                <input type="text"  className="form-control"/>
              </div>
              <br />
             <div className="email">
                  <h4>EMAIL [OPTIONAL]</h4>
                  <input type="email"className="form-control" />
             </div>
             <br />
             <div className="continue">
                <button>CONTINUE</button>
             </div>
             <h6>Get ready to receive a secret code [OTP] on your phone</h6>
         </form>
        </div>
        <div className="col">
          <div className="celeb">
            <img src={pic1} alt="" height={"500px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
