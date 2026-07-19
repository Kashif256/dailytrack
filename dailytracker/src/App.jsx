import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;