import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { getTheme, saveTheme } from "../utils/theme";

function Header() {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    saveTheme(newTheme);
  };

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="header-card">
      <div className="header-top">
        <h1>DailyTracker</h1>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <p>{today}</p>

      <h2>{greeting}, Kashif 👋</h2>
    </div>
  );
}

export default Header;