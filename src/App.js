import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Routes from "./config/Routes";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
