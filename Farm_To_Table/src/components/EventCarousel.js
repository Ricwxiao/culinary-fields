import spotlightImg from "../components/img/spotlight.png";

function EventCarousel({ height, width, desc, date, location, cost }) {
  return (
    <div className="event-carousel-container">

      <div className="event-image-container">
        <img src={spotlightImg} alt="farmer spotlight" /*width="300px" height="300px"*//>
      </div>
      <div className="description-container">
        <div className="description">
          <h1 className="header"> {desc} </h1>
          <div className="event-info-container">
            <div className="info-box">
              <img src="/imgs/home_page/cost.svg" alt="time"></img>
              <p className="box-text">{date}</p>
            </div>
            <div className="info-box">
              <img src="/imgs/home_page/pin.svg" alt="location"></img>
              <p className="box-text">{location}</p>
            </div>
            <div className="info-box">
              <img src="/imgs/home_page/time.svg" alt="cost"></img>
              <p className="box-text">{cost}</p>
            </div>
          </div>
          <p className="event-paragraph">  Chef Pascal Chureau, chef/owner of Field & Vine Events,
            has teamed up with some prominent wineries—Domaine Serene,
            Stoller Family Estate, etc.—for a dinner series that runs through
            December throughout...</p>
        </div>
      </div>
    </div>
  )
}

export default EventCarousel;
