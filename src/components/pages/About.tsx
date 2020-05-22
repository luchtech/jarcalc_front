import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import api from "../../api";

export default function About() {
  const [user, setUser] = useState({first_name: ""});
  useEffect(() => {
    fetchUser()
  });
  const fetchUser = () => {
    api.get("/api/user")
    .then(res => setUser(res.data));
  }
  
  return (
    <MDBRow>
      <MDBCol>
          <h1>ABOUT</h1>
          <MDBBtn onClick={() => fetchUser}></MDBBtn>
        <p>{user.first_name}</p>
      </MDBCol>
    </MDBRow>
  );
}
