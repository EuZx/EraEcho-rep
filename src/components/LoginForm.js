import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = memo(() => {
  return (
    <div className="loginsection">
      <a className="log-in1">{`Log In `}</a>
      <div className="username2">
        <Form className="username3">
          <Form.Control type="text" placeholder="user name" />
        </Form>
      </div>
      <div className="password1">
        <Form className="username3">
          <Form.Control type="password" placeholder="password" />
        </Form>
      </div>
      <Link className="do-not-have-container" to="/signuppage">
        <span className="do-not-have-container1">
          {`Do not have an account with us? `}
          <span className="sign-up1">Sign up</span>!
        </span>
      </Link>
      <h1 className="eraecho6">EraEcho</h1>
      <Button className="confirm1" variant="warning" href="/main" size="lg">
        Confirm
      </Button>
    </div>
  );
});

export default LoginForm;
