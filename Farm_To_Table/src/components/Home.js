import React from 'react';
import '../index.css';

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
        <img src="../img/spotlight.png" alt="farmer spotlight"  width="1280px" height="720px"/>
      </div>

      <div class="container">
        <div className = "item-1"> Item 1 </div>
        <div className = "item-2"> Item 2 </div>
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

