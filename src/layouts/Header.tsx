import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBIcon,
} from "mdbreact";
import logo from "../images/JAR.png"

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const toggleActiveNav = (nav: string) => {
    activeNav !== nav && setActiveNav(nav);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <MDBNavbar color="info-color" dark expand="md" fixed="top" scrolling>
      <MDBNavbarBrand>
        <img src={logo} height="30" alt="not found" />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse isOpen={isCollapsed} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active={activeNav === "home"}>
            <MDBLink
              className="waves-effect waves-light"
              to="/"
              onClick={() => toggleActiveNav("home")}
            >
              <MDBIcon icon="home" className="mr-1" />
              Home
            </MDBLink>
          </MDBNavItem>
          <MDBNavItem active={activeNav === "about"}>
            <MDBLink
              className="waves-effect waves-light"
              to="about"
              onClick={() => toggleActiveNav("about")}
            >
              <MDBIcon icon="info-circle" className="mr-1" />
              About
            </MDBLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={activeNav === "login"}>
            <MDBLink
              className="waves-effect waves-light"
              to="/login"
              onClick={() => toggleActiveNav("login")}
            >
              <MDBIcon icon="sign-in" className="mr-1" />
              Login
            </MDBLink>
          </MDBNavItem>
          <MDBNavItem active={activeNav === "register"}>
            <MDBLink
              className="waves-effect waves-light"
              to="/register"
              onClick={() => toggleActiveNav("register")}
            >
              <MDBIcon icon="user-plus" className="mr-1" />
              Register
            </MDBLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}
