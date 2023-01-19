import React, { useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Education from "./../../images/education.svg";
import Carts from "./../../images/shopping-cart.svg";
export const BsHeader = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (window !== undefined) {
      const creds = window.localStorage.getItem("creds");
      const user = JSON.parse(creds);
      setUserData(user);
    }
  }, []);
  const onLogout = () => {
    window.localStorage.removeItem("creds");
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand href="/dashboard">
            <img
              alt="education"
              src={Education}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Text className="text-white font-weight-bold">
            Bookstore
          </Navbar.Text>
        </Container>
        <Nav className="me-auto">
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item>Login As : {userData?.email}</NavDropdown.Item>
            <NavDropdown.Item>Change Password</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="d-flex flex-column align-items-center">
            <img
              alt="carts"
              src={Carts}
              width="15"
              height="15"
              className="align-top"
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
