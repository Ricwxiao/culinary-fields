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
        <div class="vegeContainer">
        <img className="missionImg" src="https://foodwise.org/sites/default/files/asian_vegetables.jpg"></img>
        <div className="missionPara">
          <h1>Discover local Asian produce and recipes shared by farmers in the Pacific Northwest</h1>
        </div>
      </div>
      <div className='topbanner'>
          <h1 className="header"> Latest Stories from the Field </h1>
        </header>
        <ImageCarousel /*height={500} width={1000}*/ />
        <header>
          <h1 className="header">Produce </h1>
          {/* <div class="Produces-title">
            <h2 className="sub-header"> In Season </h2>
            <img src="/imgs/home_page/right-arrow.svg" alt="arrow"></img>
          </div> */}
      </div>
        <div class="produce-container">
          <div className = "item-1">
            <a href="https://www.uwajimaya.com/uwajipedia/bitter-melon-2/" target='_blank'>
              <img src={bittermelonImg} alt="farmer spotlight" width="204px" height="184px"/>
            </a>
          </div>
          <div className = "item-1">
            <a href='https://mynorthwestgarden.com/home/eggplant' target='_blank'>
              <img src={eggplantImg} alt="farmer spotlight" width="204px" height="184px"/>
            </a>
          </div>
          <div className = "item-1">
            <a href='https://www.seasonalfoodguide.org/veg/green-onions/washington' target='_blank'>
              <img src={greenonionImg} alt="farmer spotlight" width="204px" height="184px"/>
            </a>
          </div>
          <div className = "item-1">
            <a href='https://fenugreeklove.wordpress.com/category/bok-choy/' target='_blank'>
              <img src={bokchoyImg} alt="farmer spotlight" width="204px" height="184px"/>
            </a>
          </div>
          <div className = "item-1">
            <a href='' target='_blank'>
              <img src={califlowerImg} alt="farmer spotlight" width="204px" height="184px"/>
            </a>
          </div>
        </div>
        <p class="description"> You are more than likely to find these in season produce at your local farmers market in Puget Sound below: </p>
        <div class="Produce-Info-Container">

          <div class="market-list">
            <h2> University District Farmer's Market</h2>
            <p class="clickable-text"><a href="https://seattlefarmersmarkets.org/udfm" className='fm-link'> <span class="material-symbols-outlined">language</span> Website</a></p>
            {/* <a href='https://seattlefarmersmarkets.org/udfm' class="fm-web"> </a>
              <span class="fm-text"> Website </span> */}
            <p><span class="material-symbols-outlined">pin_drop</span> 5031 University Wy NE, Seattle, WA 98105 </p>
          </div>
          <div class="market-list">
            <h2> West Seattle Farmer's Market </h2>
            <p class="clickable-text"><a href='https://seattlefarmersmarkets.org/wsfm' className='fm-link'> <span class="material-symbols-outlined">language</span> Website </a></p>
            <p><span class="material-symbols-outlined">pin_drop</span> Cnr SW Alaska St &, California Ave SW, Seattle, WA 98116 </p>
          </div>
          <div class="market-list">
            <h2> Ballard Farmer's Market </h2>
            <p class="clickable-text"><a href='https://www.sfmamarkets.com/visit-ballard-farmers-market' className='fm-link'> <span class="material-symbols-outlined">language</span> Website </a></p>
            <p><span class="material-symbols-outlined">pin_drop</span> 5345 Ballard Ave NW, Seattle, WA 98107 </p>
          </div>
          <div class="market-list">
            <h2> Capitol Hill Farmer's Market </h2>
            <p class="clickable-text"><a href='https://seattlefarmersmarkets.org/chfm' className='fm-link'><span class="material-symbols-outlined">language</span> Website </a></p>
            <p><span class="material-symbols-outlined">pin_drop</span> E Barbara Bailey Way, Seattle, WA 98112 </p>
          </div>
          <div class="market-list">
            <h2> Columbia City Farmer's Market </h2>
            <p class="clickable-text"><a href='https://seattlefarmersmarkets.org/ccfm' className='fm-link'><span class="material-symbols-outlined">language</span> Website </a></p>
            <p><span class="material-symbols-outlined">pin_drop</span> 37th Ave S, Seattle, WA 98118 </p>
          </div>
          <div class="market-list">
            <h2> Lake City Farmer's Market </h2>
            <p class="clickable-text"><a href='https://seattlefarmersmarkets.org/lcfm' className='fm-link'> <span class="material-symbols-outlined">language</span> Website </a></p>
            <p><span class="material-symbols-outlined">pin_drop</span> NE 125th St & 28th Ave NE, 98125 </p>
          </div>
        </div>
        <div class="Receipes-title">
          <h1 className="sub-header"> Recipes </h1>
          {/* <NavLink to="/recipes">
            <img src="/imgs/home_page/right-arrow.svg" alt="arrow"></img>
          </NavLink> */}
        </div>
        <div class="container">
          <div className = "item-2">
            <ImageBox src={stirfryImg} alt="Receipe 1" width="350px" height="350px" text="Stir Fry Bitter Melon" />
          </div>
          <div className = "item-2">
            <ImageBox src={soysaucechoysumImg} alt="Receipe 2" width="350px" height="350px" text="Soy Sauce Choysum"/>
          </div>
          <div className = "item-2">
            <ImageBox src={kimchiImg} alt="Receipe 3" width="350px" height="350px" text="Easy Kimchi" />
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

