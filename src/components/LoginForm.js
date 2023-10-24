import { memo } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleConfirm = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Navigate("/main");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="loginsection">
      <a className="log-in1">{`Log In `}</a>
      <div className="username2">
        <Form className="username3">
          <Form.Control
            type="text"
            placeholder="user name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form>
      </div>
      <div className="password1">
        <Form className="username3">
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
      </div>
      {error && <div className="error">{error}</div>}
      <Link className="do-not-have-container" to="/signuppage">
        <span className="do-not-have-container1">
          {`Do not have an account with us? `}
          <span className="sign-up1">Sign up</span>!
        </span>
      </Link>
      <h1 className="eraecho6">EraEcho</h1>
      <Button
        className="confirm1"
        variant="warning"
        size="lg"
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default LoginForm;
