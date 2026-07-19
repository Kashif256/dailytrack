import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import HabitList from "../components/HabitList";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="container">

      <Header />

      <ProgressCard />

      <HabitList />

      <BottomNav />

    </div>
  );
}

export default Home;