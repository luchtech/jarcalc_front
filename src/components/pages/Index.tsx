import React from "react";
import AboutProblem from "../about_problem/AboutProblem";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

export default function Index() {
  return (
    <MDBRow>
      <MDBCol>
        <div className="text-center">
          <h1>
            <strong>JAR Calculator</strong>
          </h1>
        </div>
        <AboutProblem />
        <MDBCard border="dark" className="m-3">
          <MDBCardHeader>Header</MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle tag="h5">Dark card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
