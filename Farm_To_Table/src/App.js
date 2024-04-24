import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch, useRoutes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from './components/NavBar';
import Receipe from './components/Recipe';
import HomePage from './components/Home';
import Recipe from './components/Recipe';
import FarmerInfo from "./components/FarmerInfo/FarmerInfo";
import Footer from "./components/Footer";
import Article from './components/Article';

// import component pages
// import Home from "./components/Home";
// import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/spotlight' element={<Article />} />
      <Route path="/farmfinder" element={<FarmerInfo />} />
      <Route path='/recipes' element={<Recipe />} />
      </Routes>
      <footer>
        <Footer/>
      </footer>
  </div>
  );
}

// {/* <Route path="/" element={<Recipe />} />
//       </Routes> */}

// const AppPath = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/farmfinder", element: <farmfinder /> },
//   ]);
//   return routes;
// };

// const App = () => {
//   return (
//     <Router>
//       <AppPath />
//     </Router>
//   );
// };

// export default App;

// ---

// export default function App() {
//   return (
//     <div>
//     <Routes>
//       <Route path="/" element={<Navbar/>}>
//           {/* <Route path="/Home" element={<Home/>} /> */}
//           <Route path="/farmfinder" element={<farmfinder/>} />
//       </Route>
//     </Routes>
//   </div>
//   );
// }
