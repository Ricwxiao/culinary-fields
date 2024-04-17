import { Outlet, NavLink } from "react-router-dom";
import spotlightImg from "../components/img/spotlight.png";
import caphillImg from "../components/img/caphill.jpg";
import bokchoyreceipeImg from "../components/img/bokchoyreceipe.jpg";


function ImageCarousel({ height, width }) {
  return (
    <div className="image-carousel-container" style={{ height: height, width: width }}>
      <div className="left-panel">
        <NavLink to="/farmfinder" className="nav-link">
        <img src={spotlightImg} alt="farmer spotlight" width="500px" height="500px"/>
        </NavLink>
      </div>
      <div className="right-panel">
        <div className="top-image">
          <img src={bokchoyreceipeImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
        <div className="bottom-image">
          <img src={caphillImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel;
