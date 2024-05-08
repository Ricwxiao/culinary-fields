import { Outlet, NavLink } from "react-router-dom";
import spotlightImg from "../components/img/spotlight.png";
import caphillImg from "../components/img/caphill.jpg";
import bokchoyreceipeImg from "../components/img/bokchoyreceipe.jpg";
import bokchoyreceipeImg1 from "../components/img/bokchoy1.jpg";
import SpotlightImageBox from './SpotlightImageBox';

import ImageIcon from './ImageIcon';

function ImageCarousel({ height, width }) {
  return (
    <div className="image-carousel-container" style={{ height: height, width: width }}>
      <div className="left-panel">
        {/* <NavLink to="/spotlight" className="nav-link"> */}
        {/* <img src={spotlightImg} alt="farmer spotlight" width="500px" height="500px"/> */}
        {/* <ImageBox src={spotlightImg} alt="farmer spotlight" width="500px" height="500px" text="Story by Tian Tian Farm: Farming for the Asian Community" /> */}
        <NavLink to="/spotlight" className="nav-link">
          <SpotlightImageBox src={spotlightImg} alt="farmer spotlight" width="100%" height="500px" text="Story by Tian Tian Farm: Farming for the Asian Community" text2="Most Liked"/>
        </NavLink>

      </div>
      <div className="right-panel">
        {/* <div className="top-image"> */}
          {/* <img src={bokchoyreceipeImg} alt="farmer spotlight" width="100%" height="100%"/> */}
          <SpotlightImageBox src={bokchoyreceipeImg1} alt="farmer spotlight" width="600px" height="500px" text="Bok Choy in season: Here are some of the most popular recipes" text2="In Season" />

        {/* </div> */}
        {/* <div className="bottom-image">
        <SpotlightImageBox src={caphillImg} alt="farmer spotlight" width="500px" height="250px" text="Cap Hill" text2="New"/>

          {/* <img src={caphillImg} alt="farmer spotlight" width="150%" height="50%"/> */}
        {/* </div>  */}
      </div>
    </div>
  )
}

export default ImageCarousel;
