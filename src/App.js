import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Routes from "./config/Routes";
const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
