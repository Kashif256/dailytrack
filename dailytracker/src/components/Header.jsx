import { FaSun, FaMoon } from "react-icons/fa6";

function Header() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let icon = <FaMoon />;

  if (hour < 12) {
    greeting = "Good Morning";
    icon = <FaSun />;
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    icon = <FaSun />;
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
        <div className="time-icon">{icon}</div>
      </div>

      <p>{today}</p>

      <h2>{greeting}, Kashif 👋</h2>
    </div>
  );
}

export default Header;