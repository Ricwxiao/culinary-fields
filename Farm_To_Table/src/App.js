import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import './App.css';

// import component pages
import Navbar from "./components/NavBar.js";

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navbar/>}>
          <Route path="/farmfinder" element={<farmfinder/>} />
      </Route>
    </Routes>
  </div>
  );
}
