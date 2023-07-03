import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEarth} from "@fortawesome/free-solid-svg-icons";


export default function NavBar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faEarth} className="earth-icon"/>
      <h2 className="header">my travel journal.</h2>
    </nav>
  );
}

