import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { getDailyData, calculateProgress } from "../utils/storage";

function CalendarHistory() {
  const navigate = useNavigate();

  const dailyData = getDailyData();

  const tileClassName = ({ date, view }) => {
    if (view !== "month") return;

    const key = date.toISOString().split("T")[0];

    if (!dailyData[key]) return "no-data";

    const progress = calculateProgress(dailyData[key]);

    if (progress.percent === 100) return "perfect-day";

    if (progress.percent >= 50) return "good-day";

    return "bad-day";
  };

  const handleClickDay = (date) => {
    const key = date.toISOString().split("T")[0];

    if (dailyData[key]) {
      navigate(`/history/${key}`);
    }
  };

  return (
    <div className="container">

      <BackButton />

      <h1>📅 Calendar History</h1>

      <Calendar
        tileClassName={tileClassName}
        onClickDay={handleClickDay}
      />

      <div className="calendar-legend">

        <div>
          <span className="legend perfect"></span>
          100%
        </div>

        <div>
          <span className="legend good"></span>
          50-99%
        </div>

        <div>
          <span className="legend bad"></span>
          Below 50%
        </div>

        <div>
          <span className="legend none"></span>
          No Data
        </div>

      </div>

    </div>
  );
}

export default CalendarHistory;