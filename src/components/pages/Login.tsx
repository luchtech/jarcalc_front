import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBCardTitle,
} from "mdbreact";
import { Link } from "react-router-dom";
import api from "../../api";

export default function Login() {
  const [email, setEmail] = useState({
    value: "",
    valid: true,
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    valid: true,
    error: "",
  });
  const handleChange = (e: any) => {
    let input = e.target as HTMLInputElement;
    switch (input.id) {
      case "email":
        setEmail({ value: input.value, valid: true, error: "" });
        break;
      case "password":
        setPassword({ value: input.value, valid: true, error: "" });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let login = { email: email.value, password: password.value };
    api
      .get("/sanctum/csrf-cookie")
      .then((res) => {
        console.log(res);
        api
          .post("/login", login)
          .then((res) => {
            /**
             * goes here if login succeeds...
             */
            console.log("Login Success");
            setEmail({ value: "", valid: true, error: "" });
            setPassword({ value: "", valid: true, error: "" });
          })
          .catch((e) => {
            let error = e.response.data.errors;
            if (error) {
              if (error.email) {
                setEmail({ ...email, valid: false, error: error.email[0] });
              }
              if (error.password) {
                setPassword({
                  ...password,
                  valid: false,
                  error: error.password[0],
                });
              }
            }
            console.log("Login Failed");
            console.log(error);
          });
      })
      .catch((e) => {
        console.log("CSRF failed...");
      });
  };

  return (
    <MDBRow center>
      <MDBCol md="6" middle>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              <h1>
                <strong>Login</strong>
              </h1>
            </MDBCardTitle>

            <form
              className="needs-validation"
              onSubmit={handleSubmit}
              noValidate
            >
              <MDBInput
                icon="envelope"
                value={email.value}
                label="Email"
                group
                outline
                type="email"
                id="email"
                onChange={handleChange}
                className={email.error && "is-invalid"}
              >
                <div className="invalid-feedback ml-3 pl-3">{email.error}</div>
              </MDBInput>
              <MDBInput
                icon="key"
                value={password.value}
                label="Password"
                group
                outline
                type="password"
                containerClass="mb-0"
                id="password"
                onChange={handleChange}
                className={password.error && "is-invalid"}
              >
                <div className="invalid-feedback ml-3 pl-3">
                  {password.error}
                </div>
              </MDBInput>
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <Link
                  to="/forgot"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </Link>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="submit"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>
            </form>
            <p className="font-small grey-text d-flex justify-content-center">
              Don't have an account?
              <Link
                to="/register"
                className="dark-grey-text font-weight-bold ml-1"
              >
                Sign up
              </Link>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
