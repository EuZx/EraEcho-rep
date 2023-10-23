import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./RegistrationForm.css";

const RegistrationForm = memo(() => {
  return (
    <div className="registration">
      <a className="sign-up">Sign up</a>
      <Form className="username1">
        <Form.Control type="text" placeholder="user name" />
      </Form>
      <Form className="password">
        <Form.Control type="password" placeholder="create your password" />
      </Form>
      <Form className="confirm">
        <Form.Control type="password" placeholder="confirm your password" />
      </Form>
      <h1 className="eraecho5">EraEcho</h1>
      <Button
        className="register-button"
        variant="warning"
        href="/interestselection"
        size="lg"
      >
        Register
      </Button>
    </div>
  );
});

export default RegistrationForm;
