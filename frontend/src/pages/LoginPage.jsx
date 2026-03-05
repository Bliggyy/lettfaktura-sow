import { LoginForm, LoginHeader, LoginFooter } from "../components/Login";

export default function LoginPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <main className="login-main">
        <LoginForm />
      </main>
      <LoginFooter />
    </div>
  );
}
