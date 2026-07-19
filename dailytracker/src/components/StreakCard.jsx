import { FaFire, FaTrophy } from "react-icons/fa6";
import { calculateStreaks } from "../utils/streak";

function StreakCard() {
  const { currentStreak, bestStreak } = calculateStreaks();

  return (
    <div className="streak-card">
      <div className="streak-item">
        <FaFire className="streak-icon fire" />

        <div>
          <h3>Current Streak</h3>
          <h2>{currentStreak} Days</h2>
        </div>
      </div>

      <div className="streak-item">
        <FaTrophy className="streak-icon trophy" />

        <div>
          <h3>Best Streak</h3>
          <h2>{bestStreak} Days</h2>
        </div>
      </div>
    </div>
  );
}

export default StreakCard;