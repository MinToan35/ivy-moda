import React from "react";
import Header from "./components/header/Header";
import "./App.scss";
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
