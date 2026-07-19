import { useParams, Link } from "react-router-dom";
import { getDailyData, calculateProgress } from "../utils/storage";
import BackButton from "../components/BackButton";

function HistoryDetails() {
  const { date } = useParams();

  const dailyData = getDailyData();

  const day = dailyData[date];

  if (!day) {
    return (
    
      <div className="container">
        <BackButton />
        <h2>No data found.</h2>

        <Link to="/history">← Back</Link>
      </div>
    );
  }

  const progress = calculateProgress(day);

  return (
    <div className="container">

      <BackButton />

      <h1>{date}</h1>

      <div className="history-summary">
        <h2>{progress.percent}% Completed</h2>

        <p>
          {progress.completed} of {progress.total} tasks completed
        </p>
      </div>

      <h2 style={{ marginTop: "25px" }}>
        🕌 Prayer History
      </h2>

      {day.prayers.map((prayer) => (
        <div
          key={prayer.id}
          className={`history-item ${
            prayer.completed ? "done" : "missed"
          }`}
        >
          <span>{prayer.name}</span>

          <span>
            {prayer.completed ? "✅" : "❌"}
          </span>
        </div>
      ))}

      <h2 style={{ marginTop: "25px" }}>
        ⭐ Habit History
      </h2>

      {day.habits.map((habit) => (
        <div
          key={habit.id}
          className={`history-item ${
            habit.completed ? "done" : "missed"
          }`}
        >
          <span>{habit.name}</span>

          <span>
            {habit.completed ? "✅" : "❌"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HistoryDetails;