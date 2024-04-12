import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import FarmerInfo from "./components/FarmerInfo/FarmerInfo";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

// import component pages
// import Home from "./components/Home";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Recipe />} />
      </Routes>
      <footer>

      </footer>
  </div>
  );
}

// uncaught runtime errors potential solution: https://stackoverflow.com/questions/70423894/error-useroutes-may-be-used-only-in-the-context-of-a-router-component-even