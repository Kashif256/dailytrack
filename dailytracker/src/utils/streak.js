import { getDailyData, calculateProgress } from "./storage";

export function calculateStreaks() {
  const dailyData = getDailyData();

  const dates = Object.keys(dailyData).sort();

  let currentStreak = 0;
  let bestStreak = 0;
  let streak = 0;

  // Best Streak
  dates.forEach((date) => {
    const progress = calculateProgress(dailyData[date]);

    if (progress.percent === 100) {
      streak++;
      bestStreak = Math.max(bestStreak, streak);
    } else {
      streak = 0;
    }
  });

  // Current Streak
  for (let i = dates.length - 1; i >= 0; i--) {
    const progress = calculateProgress(dailyData[dates[i]]);

    if (progress.percent === 100) {
      currentStreak++;
    } else {
      break;
    }
  }

  return {
    currentStreak,
    bestStreak,
  };
}