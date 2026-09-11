import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExploreFormat from "./components/ExploreFormat";
import FeaturedEvents from "./components/FeaturedEvents";
import CallsForPapers from "./components/CallsForPapers";
import ExploreEvents from "./components/ExploreEvents";
import Calendar from "./components/Calendar";

import "./App.css";

function Home() {
  return (
    <>
      <ExploreFormat />
      <FeaturedEvents />
      <CallsForPapers />
      <ExploreEvents />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Calendar page */}
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;