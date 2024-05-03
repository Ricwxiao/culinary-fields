import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import '../index.css';
import spotlightImg from "../components/img/spotlight.png";
import Navbar from '../components/NavBar';
import ImageCarousel from './ImageCarousel';
import EventCarousel from './EventCarousel';
import bittermelonImg from "../components/img/bittermelon.jpg";
import eggplantImg from "../components/img/eggplant.jpg";
import greenonionImg from "../components/img/greenonion.jpg";
import bokchoyImg from "../components/img/bokchoy.jpg";
import califlowerImg from "../components/img/califlower.jpg";
import kimchiImg from "../components/img/kimchi.jpg";
import stirfryImg from "../components/img/stirfry.jpg";
import soysaucechoysumImg from "../components/img/soysaucechoysum.jpg";
import ImageBox from './ImageBox';
import ImageIcon from './ImageIcon';




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

export default function HomePage(props) {
  return (
    <body>
      <div className="HomePage">
        <header className="first-title">
          <h1 className="header"> Spotlight </h1>
        </header>
        <ImageCarousel height={500} width={1000} />

        <header>
          <h1 className="header"> IN SEASON </h1>
          <h2 className="sub-header"> Produces </h2>
        </header>
        <div class="produce-container">
          <div className = "item-1"> <img src={bittermelonImg} alt="farmer spotlight" width="204px" height="184px"/> </div>
          <div className = "item-1"> <img src={eggplantImg} alt="farmer spotlight" width="204px" height="184px"/> </div>
          <div className = "item-1"> <img src={greenonionImg} alt="farmer spotlight" width="204px" height="184px"/> </div>
          <div className = "item-1"> <img src={bokchoyImg} alt="farmer spotlight" width="204px" height="184px"/> </div>
          <div className = "item-1"> <img src={califlowerImg} alt="farmer spotlight" width="204px" height="184px"/> </div>
        </div>
          <h2 className="sub-header"> Receipes </h2>
        <div class="container">
          <div className = "item-2">
            <ImageBox src={stirfryImg} alt="Receipe 1" width="350px" height="350px" text="Stir Fry Bitter Melon" />
          </div>
          <div className = "item-2">
            <ImageBox src={soysaucechoysumImg} alt="Receipe 2" width="350px" height="350px" text="Soy Sauce Choysum"/>
          </div>
          <div className = "item-2">
            <ImageBox src={kimchiImg} alt="Receipe 3" width="350px" height="350px" text="Kimchi" />
          </div>
        </div>
        {/* <header>
          <h1 className="header"> EVENTS </h1>
          <h2 className="sub-header"> This Week </h2>
          <EventCarousel height={500} width={800} desc={"Event 1"} date={"Apr 30, Mon.6:00-8:00pm"} location={"4321 12th Ave NE"} cost={"$100"}/>
        </header> */}
      </div>
    </body>
  )
}



/*
export default function HomePage(props) {
  return (
    <div className="HomePage">
      <header className="first-title">
        <h1 className="first-header"> Spotlight </h1>
        <a href = "link address"> <img src=""></img></a>
      </header>
<<<<<<< HEAD
      <header className="second-title">
        <h1 className="second-header"> In Season </h1>
      </header>
      <header className="third-title">
        <h1 className="third-header"> Events </h1>
      </header>
      <main>

        <div className="">
            <Link id="" to='/resources' className="btn btn-info btn-lg mb-5 mt-5 nav-link">　Spotlight </Link>
            <Link id="" to='/donations' className="btn btn-info btn-lg mb-5 nav-link">　In Season </Link>
            <Link id="" to='/education' className="btn btn-info btn-lg mb-5 nav-link">　Events </Link>
        </div>
      </main>
  )

}
*/

