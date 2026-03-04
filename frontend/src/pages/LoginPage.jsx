import { useState } from "react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h1 className="login-header">Log in</h1>
          <div className="form-group">
            <div className="form-label">
              <label htmlFor="email">Enter your email address</label>
            </div>
            <div className="login-input">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <label htmlFor="password">Enter your password</label>
            </div>
            <div className="login-password">
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Log in</button>
          </div>
        </form>

        <div className="login-footer">
          <a href="#">Register</a>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
