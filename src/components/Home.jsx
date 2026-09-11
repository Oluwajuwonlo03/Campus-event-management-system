import SearchEvent from "./SearchEvent";
import ExploreFormat from "./ExploreFormat";
import FeaturedEvents from "./FeaturedEvents";
import CallsForPapers from "./CallsForPapers";
import ExploreEvents from "./ExploreEvents";

function Home() {
  return (
    <>
      {/* HERO SECTION (moved from Navbar) */}
      <div className="hero">
        <div className="hero-content">
          <button className="hero-badge">
            UNIVERSITY EVENTS & ENGAGEMENT
          </button>

          <h1 className="hero-text">
            Discover. <br />
            Participate. <br />
            Connect.
          </h1>

          <h3 className="hero-text2">
            One trusted platform for every university event.
          </h3>

          <p className="hero-text3">
            Explore conferences, seminars, workshops, webinars,
            training, orientations and <br />
            professional-development programmes from one secure
            university platform.
          </p>

          <div className="hero-btn">
            <button className="hero-btn1">Explore Events</button>
            <button className="hero-btn2">Academic Events</button>
          </div>
        </div>
      </div>

      {/* Rest of the homepage */}
      <SearchEvent />
      <ExploreFormat />
      <FeaturedEvents />
      <CallsForPapers />
      <ExploreEvents />
    </>
  );
}

export default Home;