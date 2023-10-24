import { memo, useState } from "react";
import { useNavigate } from "react-router-dom"; // import useHistory hook
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./RegistrationForm.css";

const RegistrationForm = memo(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => { // make handleSubmit async
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match, please re-enter.");
      return;
    }
    try {
      await fetch(`/api/register`, { // send username and password to backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      navigate("/interestselection"); // redirect to interestselection page
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameBlur = async () => {
    try {
      const response = await fetch(`/api/check-username?username=${username}`);
      const data = await response.json();
      if (data.exists) {
        setUsernameError("The username already exists.");
      } else {
        setUsernameError("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration">
      <a className="sign-up">Sign up</a>
      <Form className="username1">
        <Form.Control
          type="text"
          placeholder="user name"
          value={username}
          onChange={handleUsernameChange}
          onBlur={handleUsernameBlur}
        />
        {usernameError && <p className="error">{usernameError}</p>}
      </Form>
      <Form className="password">
        <Form.Control
          type="password"
          placeholder="create your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form>
      <Form className="confirm">
        <Form.Control
          type="password"
          placeholder="confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </Form>
      <h1 className="eraecho5">EraEcho</h1>
      <Button
        className="register-button"
        variant="warning"
        onClick={handleSubmit}
        size="lg"
      >
        Register
      </Button>
    </div>
  );
});

export default RegistrationForm;
