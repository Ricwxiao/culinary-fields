import spotlightImg from "../components/img/spotlight.png";

function EventCarousel({ height, width }) {
  return (
    <div className="event-carousel-container">
      <div className="image-container">
        <img src={spotlightImg} alt="farmer spotlight" width="300px" height="300px"/>
      </div>
      <div className="description-container">
        <div className="description">
          <h1> Event Description </h1>
          <div className="event-info-container">
            <div>Date</div>
            <div>Time</div>
            <div>Location</div>
          </div>
          <p> Chef Pascal Chureau, chef/owner of Field & Vine Events,
            has teamed up with some prominent wineries—Domaine Serene,
            Stoller Family Estate, etc.—for a dinner series that runs through
            December throughout...</p>
        </div>
      </div>
    </div>
  )
}


<div className="right-panel">
        <div className="top-image">
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
        <div className="bottom-image">
          <img src={spotlightImg} alt="farmer spotlight" width="100%" height="100%"/>
        </div>
      </div>

export default EventCarousel;
