import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function MainContent(props) {
  return (
    <div className="destinations-container">
      <div className="destination-container">
      <img
          src= {`${props.city.imageUrl}`}
          alt="hot air ballons"
          className="destination-img"
        />
        <div className="destination-content">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="pin-icon" />
            <h3 className="country">{props.city.location}</h3>
            <a href={` ${props.city.googleMapsUrl} `} className="google-maps">
              View on Google Maps
            </a>
          </div>

          <div className="destination-info">
            <h2 className="destination">{props.city.title}</h2>
            <h4 className="history">{props.city.startDate} - {props.city.endDate}</h4>
            <p className="destination-description">
            {props.city.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

