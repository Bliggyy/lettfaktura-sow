import { LoginForm, LoginHeader, LoginFooter } from "../components/Login";

export default function LoginPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}
