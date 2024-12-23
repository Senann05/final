import "./login.css";

const Login = () => {
  return (
    // <div>
    //   <div className="admin-container">
    //     <h1>Admin Panel</h1>
    //   </div>
    //   <div>
    //     <label htmlFor="login">Login</label>
    //     <input className="input-login" id="login" type="text" placeholder="Enter your login" />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input className="input-password" id="password" type="password" placeholder="Enter your password" />
    //   </div>
    //   <button>Sign In</button>
    // </div>

    <div className="admin-container">
  <h2>Admin Panel</h2>
  <div className="cnt2">
    <label htmlFor="login">Login</label>
    <input className="input-login" id="login" name="login" type="text" />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input className="input-password" id="password" name="password" type="password" />
  </div>
  <button className="loginbutton">Sign in</button>
</div>

  );
};

export default Login;
