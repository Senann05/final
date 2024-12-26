import { useState } from 'react';
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Daxil ediləcək login məlumatları
    const validLogin = 'admin';
    const validPassword = 'password123';

    if (login === validLogin && password === validPassword) {
      alert('Login successful!');
      window.location.href = "/edit"; // Redirect to the edit page
    } else {
      alert('Incorrect login or password!');
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
        <button type="submit" className="loginbutton">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
