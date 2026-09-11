import logo from "./logo.jpg";
import "./Navbar.css"

function Navbar({ onShowSignin, onShowSignup, onBackHome }) {
  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={logo} alt="FUTO Events" />
        <h2>FUTO Events</h2>
      </div>

      <div className="text">
        <p className="home" onClick={onBackHome} style={{ cursor: "pointer" }}>
          Home
        </p>
        <p className="explore">Explore Events</p>
        <p className="academic">Academic Events</p>
        <p className="calender">Calendar</p>
        <p className="verify">Verify Certificate</p>
      </div>

      <div className="btn">
        <button className="btn-1" onClick={onShowSignup}>
          Register
        </button>

        <button className="signin-btn" onClick={onShowSignin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;