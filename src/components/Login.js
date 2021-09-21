import React from "react";

const Login = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 style={{textAlign:"center"}}>Login</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #1de9b6 teal accent-3">Login</button>
      </div>
    </div>
  );
};

export default Login;
