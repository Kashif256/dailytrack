import { NavLink } from "react-router-dom";
import {
  FaHouse,
  FaClockRotateLeft,
  FaChartSimple,
  FaGear,
} from "react-icons/fa6";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/">
        <FaHouse />
        <span>Home</span>
      </NavLink>

      <NavLink to="/history">
        <FaClockRotateLeft />
        <span>History</span>
      </NavLink>

      <NavLink to="/stats">
        <FaChartSimple />
        <span>Stats</span>
      </NavLink>

      <NavLink to="/settings">
        <FaGear />
        <span>Settings</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;