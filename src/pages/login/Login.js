import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// https://getbootstrap.com/docs/4.2/utilities/flex/
export const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    tc: false,
  });
  const onFormChange = (e, key) => {
    setLoginForm({
      ...loginForm,
      [key]: key === "tc" ? e.target.checked : e.target.value,
    });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    console.log("onLoginSubmit", loginForm);
    navigate('/dashboard');
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
    >
      <Form onSubmit={onLoginSubmit} className='w-55'>
        <h3 className="text-center">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "email")}
            defaultValue={loginForm.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "password")}
            defaultValue={loginForm.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ whiteSpace: "nowrap" }}
            onChange={(e) => onFormChange(e, "tc")}
            type="checkbox"
            label="Accept terms and conditions"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        <p className="mt-2">Don't have a account ? <Link to="/signup">click here</Link> to signup.</p>
      </Form>
    </div>
  );
};
