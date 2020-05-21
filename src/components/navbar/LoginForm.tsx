import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {};
  const handleChange = (e: any) => {
    console.log(e.keyCode)
    let input = e.target as HTMLInputElement
    switch (input.id) {
        case "email":
            setEmail(input.value)
            break;
        case "password":
            setPassword(input.value)
        break;
        default:
        break;
    }
  }

  return (
    <>
      <MDBInput
        label="Email"
        outline
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
      />
      <MDBInput
        label="Password"
        outline
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
      />
      <MDBBtn type="submit" sm color="secondary" outline onClick={handleSubmit}>
        Close
      </MDBBtn>
    </>
  );
}
