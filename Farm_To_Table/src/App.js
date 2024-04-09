<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import FarmerInfo from "./components/FarmerInfo/FarmerInfo";
import Recipe from "./components/Recipe";
>>>>>>> origin

// import component pages
// import Home from "./components/Home";
import Navbar from "./components/NavBar";

export default function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>
            Hello World
          </h1>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
=======
    <div>
      <header>
        <Navbar/>
>>>>>>> origin
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