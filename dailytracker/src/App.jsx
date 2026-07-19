import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import HistoryDetails from "./pages/HistoryDetails";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import CalendarHistory from "./pages/CalendarHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/history"
        element={<History />}
      />

      <Route
        path="/history/:date"
        element={<HistoryDetails />}
      />

      <Route
        path="/stats"
        element={<Stats />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />
      <Route
       path="/calendar"
       element={<CalendarHistory />}
      />
    </Routes>
  );
}

export default App;