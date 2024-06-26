// import React, { useState } from 'react';
// import { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, Switch, useRoutes, useParams } from "react-router-dom";
// import './App.css';
// import Home from "./components/Home";
// import Navbar from './components/NavBar';
// import Receipe from './components/Recipe';
// import HomePage from './components/Home';
// import Recipe from './components/Recipe';
// import FarmerInfo from "./components/FarmerInfo/FarmerInfo";
// import Footer from "./components/Footer";
// import Article from './components/Article';
// import FFFinder from './components/FFFinder';

// // import component pages
// // import Home from "./components/Home";
// // import Navbar from "./components/NavBar";

// export default function App() {
//   return (
//     <div>
//       <header>
//         <Navbar/>
//       </header>
//       <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path='/spotlight' element={<Article />} />
//       <Route path="/farmfinder" element={<FFFinder />} />
//       <Route path="/farmerinfo/:id" element={<FarmerInfo />} />
//       <Route path='/recipes' element={<Recipe />} />
//       </Routes>
//       <footer>
//         <Footer/>
//       </footer>
//   </div>
//   );
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './components/Home';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';
import FarmerInfo from "./components/FarmerInfo/FarmerInfo";
import Footer from "./components/Footer";
import Article from './components/Article';
import FFFinder from './components/FFFinder';

export default function App() {
  return (
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spotlight" element={<Article />} />
          <Route path="/farmfinder" element={<FFFinder />} />
          <Route path="/farmerinfo/:id" element={<FarmerInfo />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/recipe-details/:name" element={<RecipeDetails />} />
        </Routes>
        <footer>
          <Footer />
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
