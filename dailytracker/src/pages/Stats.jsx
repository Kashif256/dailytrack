import BackButton from "../components/BackButton";
import { calculateStreaks } from "../utils/streak";
import { getDailyData, calculateProgress } from "../utils/storage";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function Stats() {
  const dailyData = getDailyData();
  const dates = Object.keys(dailyData).sort();

  let totalTasks = 0;
  let completedTasks = 0;

  const labels = [];
  const weekly = [];

  dates.slice(-7).forEach((date) => {
    const progress = calculateProgress(dailyData[date]);

    totalTasks += progress.total;
    completedTasks += progress.completed;

    labels.push(date.slice(5));
    weekly.push(progress.percent);
  });

  const { currentStreak, bestStreak } =
    calculateStreaks();

  const doughnutData = {
    labels: ["Completed", "Remaining"],

    datasets: [
      {
        data: [
          completedTasks,
          totalTasks - completedTasks,
        ],
      },
    ],
  };

  const barData = {
    labels,

    datasets: [
      {
        label: "Progress %",
        data: weekly,
      },
    ],
  };

  return (
    <div className="container">

      <BackButton />

      <h1>📊 Statistics</h1>

      <div className="stats-grid">

        <div className="stats-card">
          <h3>🔥 Current Streak</h3>
          <h1>{currentStreak}</h1>
          <p>Days</p>
        </div>

        <div className="stats-card">
          <h3>🏆 Best Streak</h3>
          <h1>{bestStreak}</h1>
          <p>Days</p>
        </div>

      </div>

      <div className="chart-card">
        <h2>Task Completion</h2>

        <Doughnut data={doughnutData} />
      </div>

      <div className="chart-card">
        <h2>Last 7 Days Progress</h2>

        <Bar data={barData} />
      </div>

    </div>
  );
}

export default Stats;