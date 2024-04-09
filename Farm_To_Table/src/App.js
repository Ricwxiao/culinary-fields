import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch, useRoutes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";

// export default function App() {
//   return (
//     <div>
//     <Routes>
//       <Route path="/" element={<Home/>}>
//           {/* <Route path="/Home" element={<Home/>} /> */}
//           <Route path="/farmfinder" element={<farmfinder/>} />
//       </Route>
//     </Routes>
//   </div>
//   );
// }

const AppPath = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/farmfinder", element: <farmfinder /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppPath />
    </Router>
  );
};

export default App;

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