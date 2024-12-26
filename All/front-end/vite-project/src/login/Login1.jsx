// import "./login.css";
// import {Link} from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="admin-container">
//   <h2>Admin Panel</h2>
//   <div className="cnt2">
//     <label htmlFor="login">Login</label>
//     <input className="input-login" id="login" name="login" type="text" />
//   </div>
//   <div>
//     <label htmlFor="password">Password</label>
//     <input className="input-password" id="password" name="password" type="password" />
//   </div>
//   <button className="loginbutton"><Link to="/edit" className="gfvdsjhjd">Sign in</Link></button>
// </div>

//   );
// };

// export default Login;
import { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own login validation
    const validLogin = 'admin';
    const validPassword = 'password123';

    if (login === validLogin && password === validPassword) {
      setError('');
      // Redirect to the edit page if login is successful
      // You can use history.push("/edit") or Link
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <div className="cnt2">
          <label htmlFor="login">Login</label>
          <input
            className="input-login"
            id="login"
            name="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="input-password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="loginbutton">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
