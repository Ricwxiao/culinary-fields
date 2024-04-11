import spotlightImg from "../components/img/spotlight.png";

function ImageCarousel({ height, width }) {
  return (
    <div className="image-carousel-container" style={{ height: height, width: width }}>
      <div className="left-panel">
        <img src={spotlightImg} alt="farmer spotlight" width="500px" height="400px"/>
      </div>
      <div className="right-panel">
        <div className="top-image">
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
        <div className="bottom-image">
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel;
