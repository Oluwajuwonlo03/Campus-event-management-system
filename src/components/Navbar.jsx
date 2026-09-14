import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const goToExploreEvents = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("explore-events")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById("explore-events")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={logo} alt="FUTO Events" />
        <h2>FUTO Events</h2>
      </div>

      <div className="text">
        <p className="home" onClick={goHome} style={{ cursor: "pointer" }}>
          Home
        </p>

        <p
          className="explore"
          onClick={goToExploreEvents}
          style={{ cursor: "pointer" }}
        >
          Explore Events
        </p>

        <p className="academic">Academic Events</p>

        <p
          className="calender"
          onClick={() => goToPage("/calendar")}
          style={{ cursor: "pointer" }}
        >
          Calendar
        </p>

        <p
          className="verify"
          onClick={() => goToPage("/verify")}
          style={{ cursor: "pointer" }}
        >
          Verify Certificate
        </p>
      </div>

      <div className="btn">
        <button className="btn-1" onClick={() => goToPage("/register")}>
          Register
        </button>

        <button className="signin-btn" onClick={() => goToPage("/signin")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;