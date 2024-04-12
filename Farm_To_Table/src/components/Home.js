import React from 'react';
import '../index.css';
import spotlightImg from "../components/img/spotlight.png";
import Navbar from '../components/NavBar';
import ImageCarousel from './ImageCarousel';
import EventCarousel from './EventCarousel';

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
          <h1 className="first-header"> Spotlight </h1>
        </header>
        <ImageCarousel height={500} width={800} />


      <header>
        <h1 className="second-header"> IN SEASON </h1>
        <h2 className="second-sub-header"> Produces </h2>
      </header>
      <div class="container">
        <div className = "item-1"> <img src={spotlightImg} alt="farmer spotlight" width="164px" height="184px"/> </div>
        <div className = "item-2"> <img src={spotlightImg} alt="farmer spotlight" width="164px" height="184px"/> </div>
        <div className = "item-3"> <img src={spotlightImg} alt="farmer spotlight" width="164px" height="184px"/> </div>
        <div className = "item-4"> <img src={spotlightImg} alt="farmer spotlight" width="164px" height="184px"/> </div>
        <div className = "item-5"> <img src={spotlightImg} alt="farmer spotlight" width="164px" height="184px"/> </div>
      </div>
        <h2 className="second-sub-header"> Receipes </h2>
        <div class="container">
        <div className = "item-1"> <img src={spotlightImg} alt="farmer spotlight" width="300px" height="300px"/> </div>
        <div className = "item-2"> <img src={spotlightImg} alt="farmer spotlight" width="300px" height="300px"/> </div>
        <div className = "item-3"> <img src={spotlightImg} alt="farmer spotlight" width="300px" height="300px"/> </div>
      </div>
      <header>
        <h1 className="third-header"> EVENTS </h1>
        <h2 className="second-sub-header"> This Week </h2>
        <EventCarousel height={500} width={800}/>
        {/* <div class="container-event">
          <div className = "item-1"> <img src={spotlightImg} alt="farmer spotlight" width="100px" height="70px"/> </div>
        </div>
        <div class="event-border"> Event Description
        </div> */}
      </header>
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
    </div>
  )

}
*/

