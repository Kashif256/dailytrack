import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import {
  getDailyData,
  calculateProgress,
} from "../utils/storage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function WeeklyChart() {
  const dailyData = getDailyData();

  const dates = Object.keys(dailyData).sort();

  const labels = [];
  const values = [];

  dates.slice(-7).forEach((date) => {
    const progress = calculateProgress(dailyData[date]);

    labels.push(date.slice(5));

    values.push(progress.percent);
  });

  const data = {
    labels,

    datasets: [
      {
        label: "Completion %",
        data: values,
        backgroundColor: values.map((value) => {
  if (value === 100) return "#22C55E"; // Green

  if (value >= 50) return "#FACC15"; // Yellow

  return "#EF4444"; // Red
}),
],

borderRadius:12,

borderSkipped:false,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default WeeklyChart;