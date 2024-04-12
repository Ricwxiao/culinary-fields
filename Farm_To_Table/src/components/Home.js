import React from 'react';
import FarmerInfo from './FarmerInfo/FarmerInfo';

// robert's line
// we want to keep this line of code


// Taiga's line for In Season Section
/*
- Bolded Header Text: “In Season Produce for [Month]”
- Card of vegetables
 - Has Image
 - Has name of vegetable on image
 - Drop Shadow Effect
*/

export default function Home(props) {
  return (
    <div className="HomePage">
      <header className="page-title">
        <h1 className="page-header"> Spotlight </h1>
      </header>
      <FarmerInfo farmName=""/>
    </div>
  )
}