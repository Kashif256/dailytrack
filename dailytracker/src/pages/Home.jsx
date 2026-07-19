import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import BottomNav from "../components/BottomNav";
import { getTodayChecklist } from "../utils/checklist";

function Home() {

  const today = getTodayChecklist();

  return (
    <div className="container">

      <Header />

      <ProgressCard />

      <div className="habit-list">

        <h2>🕌 Prayer Tracker</h2>

        {today.prayers.map((prayer) => (

          <div className="habit-item" key={prayer.id}>

            <label>

              <input type="checkbox" />

              {prayer.name}

            </label>

          </div>

        ))}

      </div>

      <br />

      <div className="habit-list">

        <h2>⭐ Daily Habits</h2>

        {today.habits.map((habit) => (

          <div className="habit-item" key={habit.id}>

            <label>

              <input type="checkbox" />

              {habit.name}

            </label>

          </div>

        ))}

      </div>

      <BottomNav />

    </div>
  );
}

export default Home; 