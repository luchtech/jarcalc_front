import React from "react";
import { MDBContainer } from "mdbreact";
import { Route } from "react-router-dom";
import Index from "../components/pages/Index";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import About from "../components/pages/About";
import Forgot from "../components/pages/Forgot";

export default function Main() {
  return (
    <main className="my-5 py-5">
      <MDBContainer className="scrollbar scrollbar-primary">
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
      </MDBContainer>
    </main>
  );
}
