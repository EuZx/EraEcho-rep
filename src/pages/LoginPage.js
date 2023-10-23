import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="hello">
        <section className="nav" />
        <div className="navsection">
          <div className="navsec">
            <Link className="home1" to="/main">Home</Link>
            <Link className="my-history1" to="/myhistory">My History</Link>
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
