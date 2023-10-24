import { Link } from "react-router-dom";
import HomeContainer from "../components/HomeContainer";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <HomeContainer />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
