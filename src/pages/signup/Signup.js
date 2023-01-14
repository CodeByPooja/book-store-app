import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onFormChange = (e, key) => {
    setSignupForm({
      ...signupForm,
      [key]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log("onFormSubmit", signupForm);
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={onFormSubmit} className="w-55">
        <h3 className="text-center">Create New Account</h3>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "Username")}
            defaultValue={signupForm.username}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "email")}
            defaultValue={signupForm.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "password")}
            defaultValue={signupForm.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => onFormChange(e, "confirmPassword")}
            defaultValue={signupForm.confirmPassword}
            type="password"
            placeholder="confirm Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Sign-up
        </Button>
        <Form.Label className="mt-2">
          Already Have a account ? <Link to="/">click here</Link> to login.
        </Form.Label>
      </Form>
    </div>
  );
};
