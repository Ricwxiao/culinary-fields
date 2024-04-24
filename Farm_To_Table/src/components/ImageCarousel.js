import { Outlet, NavLink } from "react-router-dom";
import spotlightImg from "../components/img/spotlight.png";
import caphillImg from "../components/img/caphill.jpg";
import bokchoyreceipeImg from "../components/img/bokchoyreceipe.jpg";
import ImageBox from './ImageBox';

function ImageCarousel({ height, width }) {
  return (
    <div className="image-carousel-container" style={{ height: height, width: width }}>
      <div className="left-panel">
        <NavLink to="/spotlight" className="nav-link">
        {/* <img src={spotlightImg} alt="farmer spotlight" width="500px" height="500px"/> */}
        <ImageBox src={spotlightImg} alt="farmer spotlight" width="500px" height="500px" text="Story by Tian Tian Farm: Farming for the Asian Community" />
        </NavLink>

      </div>
      <div className="right-panel">
        <div className="top-image">
          {/* <img src={bokchoyreceipeImg} alt="farmer spotlight" width="100%" height="100%"/> */}
          <ImageBox src={bokchoyreceipeImg} alt="farmer spotlight" width="100%" height="100%" text="Bok Choy in season: Here are some of the most popular recipes " />
        </div>
        <div className="bottom-image">
        <ImageBox src={caphillImg} alt="farmer spotlight" width="100%" height="100%" text="Cap Hill" />
          {/* <img src={caphillImg} alt="farmer spotlight" width="150%" height="50%"/> */}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel;
