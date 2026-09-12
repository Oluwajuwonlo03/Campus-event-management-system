import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults";

import "./App.css";

function App() {
  return (
    <>
      <ExploreFormat />
      <FeaturedEvents />
      <CallsForPapers />
      <ExploreEvents/>
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