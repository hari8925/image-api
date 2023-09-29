// import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Image from "./Image";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="todo" element={<Image />} />
        <Route path="home" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
