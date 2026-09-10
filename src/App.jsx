import ExploreFormat from "./components/ExploreFormat";
import FeaturedEvents from "./components/FeaturedEvents";
import CallsForPapers from "./components/CallsForPapers";
import ExploreEvents from "./components/ExploreEvents";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      
      <ExploreFormat />
      <FeaturedEvents />
      <CallsForPapers />
      <ExploreEvents />
      <Hero /> 
      <Footer />
    </>
  );
}

export default App;