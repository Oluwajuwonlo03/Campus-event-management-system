import { useState } from "react";
import Signin from "./Signin";
import logo from "./logo.jpg";

function Navbar() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
    
      <div className="header">

        <div className="logo">
          <img
            className="image"
            src={logo}
            alt="FUTO Events"
          />

          <h2>FUTO Events</h2>
        </div>

        <div className="text">
          <p className="home">Home</p>
          <p className="explore">Explore Events</p>
          <p className="academic">Academic Events</p>
          <p className="calender">Calendar</p>
          <p className="verify">Verify Certificate</p>
        </div>

        <div className="btn">

          <button className="btn-1">
            Register
          </button>

          <button
            className="signin-btn"
            onClick={() => setShowSignin(true)}
          >
            Sign In
          </button>

        </div>

      </div>

     
      {showSignin ? (
        <Signin onBack={() => setShowSignin(false)} />
      ) : (
        <>
        
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
                <button className="hero-btn1">
                  Explore Events
                </button>

                <button className="hero-btn2">
                  Academic Events
                </button>
              </div>

            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Navbar;