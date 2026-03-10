import { useState } from "react";
import "../../styles/Login/LoginForm.css";
import showPasswordImg from "../../assets/show-password.png";
import hidePasswordImg from "../../assets/hide-password.png";
import api from "../../api/axios.js";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import KEYS from "../../constants/translationKeys";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, toggleShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "admin" || password !== "password") {
      setError("Credentials are invalid");
      return;
    }

    const response = await api.post("api/auth/login", {
      username: email,
      password: password,
    });

    if (response.status === "Failed" || !response.data?.token) {
      alert("User credentials are invalid");
    }

    login(email, response.data.token);
    navigate("/pricelist");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1 className="login-header">{t(KEYS.LOGIN.FORM.HEADER)}</h1>
        <div className="form-group">
          <div className="form-label">
            <label htmlFor="email">{t(KEYS.LOGIN.FORM.EMAIL_LABEL)}</label>
          </div>
          <div className="login-input">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(KEYS.LOGIN.FORM.EMAIL_PLACEHOLDER)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-label">
            <label htmlFor="password">
              {t(KEYS.LOGIN.FORM.PASSWORD_LABEL)}
            </label>
          </div>
          <div className="login-password">
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t(KEYS.LOGIN.FORM.PASSWORD_PLACEHOLDER)}
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
          <button type="submit">{t(KEYS.LOGIN.FORM.LOGIN_BUTTON)}</button>
        </div>
        {error && (
          <div className="error-container">
            <span className="error">{error}</span>
          </div>
        )}
      </form>

      <div className="login-footer">
        <a href="#">{t(KEYS.LOGIN.FORM.REGISTER)}</a>
        <a href="#">{t(KEYS.LOGIN.FORM.FORGOT_PASSWORD)}</a>
      </div>
    </div>
  );
}
