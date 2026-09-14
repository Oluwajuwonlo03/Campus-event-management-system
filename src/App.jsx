import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults";
import Verify from "./components/Verify";
import Calendar from "./components/Calendar";
import EventCategory from "./components/EventCategory";
import EventDetails from "./components/EventDetails";

import "./App.css";
import "./components/responsive.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/events/:category" element={<EventCategory />} />
        <Route path="/featured-events/:event" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;