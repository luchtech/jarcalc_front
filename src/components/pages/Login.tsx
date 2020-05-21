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
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   axios.defaults.baseURL = "http://127.0.0.1:8000";
  //   axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  const handleChange = (e: any) => {
    let input = e.target as HTMLInputElement;
    switch (input.id) {
      case "email":
        setEmail(input.value);
        break;
      case "password":
        setPassword(input.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let login = { email, password };
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000/sanctum/csrf-cookie")
      .then((res) => {
        console.log("@ csrf-cookie");
        console.log(res);
        axios
          .post("http://localhost:8000/login", { email, password })
          .then((res) => {
            setError("")
          })
          .catch((e) => {
              let error = e.response.data.errors.email[0]
              if(error) setError(error)
          });
      })
      .catch((e) => {
        console.log("error @ csrf-cookie");
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
            <form onSubmit={handleSubmit}>
              <MDBInput
                label="Your email"
                group
                outline
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
              />
              <MDBInput
                label="Your password"
                group
                outline
                type="password"
                containerClass="mb-0"
                id="password"
                value={password}
                onChange={handleChange}
              />
              {error && (
                <p className="font-small red-text d-flex justify-content-start">
                  {error}
                </p>
              )}
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
