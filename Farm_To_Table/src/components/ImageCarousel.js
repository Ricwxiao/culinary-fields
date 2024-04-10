
import spotlightImg from "../components/img/spotlight.png";

function ImageCarousel({ height, width }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", border: "2px solid", height: height, width: width }}>
      <div style={{ border: "2px solid green", width: '50%' }}>
        <img src={spotlightImg} alt="farmer spotlight" width="500px" height="400px"/>
      </div>
      <div style={{ display: "flex", flexDirection: "column", border: "2px solid blue", width: '50%' }}>
        <div style={{ border: "2px solid yellow", height: '50%' }}>
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
        <div style={{ border: "2px solid red", height: '50%' }}>
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel