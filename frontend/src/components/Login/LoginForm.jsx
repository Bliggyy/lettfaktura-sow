import { useState } from "react";
import "../../styles/Login/LoginForm.css";
import showPasswordImg from "../../assets/show-password.png";
import hidePasswordImg from "../../assets/hide-password.png";
import api from "../../api/axios.js";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, toggleShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await api.post("api/auth/login", {
      username: email,
      password: password,
    });

    if (response.status === "Failed") {
      alert("User credentials are invalid");
    }

    login(email, response.token);
    navigate("/pricelist");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1 className="login-header">Log in</h1>
        <div className="form-group">
          <div className="form-label">
            <label htmlFor="email">Enter your email address</label>
          </div>
          <div className="login-input">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
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
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <img
                id="password-img"
                src={showPassword ? hidePasswordImg : showPasswordImg}
                alt="Show password img"
                onClick={() => toggleShowPassword((prev) => !prev)}
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
        <a href="#">Forgotten Password?</a>
      </div>
    </div>
  );
}
