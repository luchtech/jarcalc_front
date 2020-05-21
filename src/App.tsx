import React from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Bottom from './layouts/Bottom';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Bottom />
    </Router>
  );
}

export default App;
