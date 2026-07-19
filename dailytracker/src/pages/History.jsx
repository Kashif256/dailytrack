import { Link } from "react-router-dom";
import { getDailyData, calculateProgress } from "../utils/storage";
import BackButton from "../components/BackButton";

function History() {
  const dailyData = getDailyData();

  const dates = Object.keys(dailyData).sort().reverse();

  return (


    <div className="container">
      <BackButton />
      <h1>📅 History</h1>

      {dates.length === 0 ? (
        <p>No history available.</p>
      ) : (
        dates.map((date) => {
          const progress = calculateProgress(dailyData[date]);

          return (
            <div className="history-card" key={date}>
              <div>
                <h3>{date}</h3>

                <p>
                  {progress.completed} / {progress.total} Completed
                </p>
              </div>

              <div className="history-right">
                <h2>{progress.percent}%</h2>

                <Link
                  to={`/history/${date}`}
                  className="view-btn"
                >
                  View Details
                </Link>
              </div>

            </div>
          );
        })
      )}
    </div>
  );
}

export default History;