import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalFooter,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import LoginForm from "./LoginForm";

export default function LoginRegisterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("login");
  return (
    <MDBContainer>
      <MDBBtn color="primary" onClick={() => setIsOpen(!isOpen)}>
        MDBModal
      </MDBBtn>
      <MDBModal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} centered>
        <MDBNav
          tabs
          className="nav-justified"
          color="indigo"
          style={{ margin: "-1.5em 0.5em 0 0.5em" }}
        >
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={activeItem === "login"}
              onClick={() => setActiveItem("login")}
              role="tab"
            >
              <MDBIcon icon="user" /> Profile
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={activeItem === "register"}
              onClick={() => setActiveItem("register")}
              role="tab"
            >
              <MDBIcon icon="heart" /> Follow
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent className="card" activeItem={activeItem}>
          <MDBTabPane tabId="login" role="tabpanel">
            <LoginForm />
          </MDBTabPane>
          <MDBTabPane tabId="register" role="tabpanel">
            <p className="mt-2">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit, blog
              sartorial PBR leggings next level wes anderson artisan four loko
              farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
              vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
              magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
              velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
              anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa
              terry richardson biodiesel. Art party scenester stumptown, tumblr
              butcher vero sint qui sapiente accusamus tattooed echo park.
            </p>
          </MDBTabPane>
        </MDBTabContent>
        <MDBModalFooter>
          <MDBBtn
            sm
            color="secondary"
            outline
            onClick={() => setIsOpen(!isOpen)}
          >
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
