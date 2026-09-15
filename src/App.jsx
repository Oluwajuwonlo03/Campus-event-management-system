<<<<<<< HEAD
import ExploreFormat from "./components/ExploreFormat";
import FeaturedEvents from "./components/FeaturedEvents";
import CallsForPapers from "./components/CallsForPapers";
import ExploreEvents from "./components/ExploreEvents";
import Hero from "./components/hero";
import Footer from "./components/Footer";
=======
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

>>>>>>> 467637663badc14d75ca1f9106e074b45c539727
import "./App.css";
import "./components/responsive.css";

function App() {
  return (
<<<<<<< HEAD
    <>
      
      <ExploreFormat />
      <FeaturedEvents />
      <CallsForPapers />
      <ExploreEvents />
      <Hero /> 
      <Footer />
    </>
=======
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
>>>>>>> 467637663badc14d75ca1f9106e074b45c539727
  );
}

export default App;