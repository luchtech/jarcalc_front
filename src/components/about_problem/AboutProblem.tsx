import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
} from "mdbreact";
import ProblemType from "./ProblemType";

export default function AboutProblem() {
  return (
    <form action="">
      <MDBCard border="dark" className="m-3">
      <MDBCardHeader>About the Problem</MDBCardHeader>
      <MDBCardBody className="text-dark">
        <MDBCardTitle tag="h5">Dark card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBInput label="Title" outline />
        <ProblemType />
        <MDBInput label="Example label" outline />
        <MDBInput label="Example label" outline />
      </MDBCardBody>
    </MDBCard>
    </form>
  );
}
