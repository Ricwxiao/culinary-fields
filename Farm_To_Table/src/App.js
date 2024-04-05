import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import './App.css';

// import component pages
// import Home from "./components/Home";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navbar/>}>
          {/* <Route path="/Home" element={<Home/>} /> */}
          <Route path="/farmfinder" element={<farmfinder/>} />
      </Route>
    </Routes>
  </div>
  );
}

// uncaught runtime errors potential solution: https://stackoverflow.com/questions/70423894/error-useroutes-may-be-used-only-in-the-context-of-a-router-component-even