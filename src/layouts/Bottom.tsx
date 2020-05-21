import React from "react";
import { MDBFooter, MDBContainer } from "mdbreact";

export default function Bottom() {
  return (
    <MDBFooter
      color="cyan"
      className="font-small darken-3 pt-0"
      style={{ position: "fixed", width: "100%", zIndex: "2" }}
    >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
