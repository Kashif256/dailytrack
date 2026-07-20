import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import {
  getDailyData,
  calculateProgress,
} from "../utils/storage";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function CompletionChart() {
  const dailyData = getDailyData();

  let completed = 0;
  let total = 0;

  Object.values(dailyData).forEach((day) => {
    const progress = calculateProgress(day);

    completed += progress.completed;
    total += progress.total;
  });

  const data = {
    labels: ["Completed", "Remaining"],

    datasets: [
      {
        data: [
          completed,
          total - completed,
        ],

        backgroundColor: [
          "#4F46E5", // Purple
          "#E5E7EB", // Gray
        ],

        borderColor: [
          "#4F46E5",
          "#E5E7EB",
        ],

        hoverBackgroundColor: [
          "#4338CA",
          "#D1D5DB",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    cutout: "70%",

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },

      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
    />
  );
}

export default CompletionChart;