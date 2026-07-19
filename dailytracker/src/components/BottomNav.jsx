import { Link } from "react-router-dom";
import {
  FaHouse,
  FaClockRotateLeft,
  FaChartSimple,
  FaGear,
} from "react-icons/fa6";

function BottomNav() {
  return (
    <div className="bottom-nav">

      <Link to="/">
        <FaHouse />
      </Link>

      <Link to="/history">
        <FaClockRotateLeft />
      </Link>

      <Link to="/stats">
        <FaChartSimple />
      </Link>

      <Link to="/settings">
        <FaGear />
      </Link>

    </div>
  );
}

export default BottomNav;