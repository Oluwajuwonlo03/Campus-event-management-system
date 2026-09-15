import "./Calendar.css";

function Calendar() {
  return (
    <div className="calendar-page">

      {/* Hero */}
      <section className="calendar-hero">
        <div className="calendar-hero-content">
          <span className="calendar-badge">UNIVERSITY CALENDAR</span>

          <h1>Plan your participation.</h1>

          <p>
            Browse upcoming university events and add them to your calendar
            with the correct event timezone.
          </p>
        </div>
      </section>


      {/* September */}
      <section className="calendar-month">
        <h2>September 2026</h2>

        <div className="calendar-events">

          <div className="calendar-event">
            <div className="event-content">
              <span className="event-tag">Workshop</span>

              <h3>Demo Digital Skills & Research Tools Workshop</h3>

              <p className="event-date">
                Sun, 13 Sep 2026 · 9:00 AM · Africa/Lagos
              </p>

              <p className="event-location">
                ICT Training Laboratory
              </p>
            </div>

            <button className="download-btn highlighted">
              Download ICS
            </button>
          </div>


          <div className="calendar-event">
            <div className="event-content">
              <span className="event-tag">
                Training / Professional Development
              </span>

              <h3>Demo Professional Training & Development Programme</h3>

              <p className="event-date">
                Sat, 19 Sep 2026 · 9:30 AM · Africa/Lagos
              </p>

              <p className="event-location">
                Training Centre / Online
              </p>
            </div>

            <button className="download-btn">
              Download ICS
            </button>
          </div>

        </div>
      </section>


      {/* October */}
      <section className="calendar-month october-section">
        <h2>October 2026</h2>

        <div className="calendar-events">

          <div className="calendar-event">
            <div className="event-content">
              <span className="event-tag">
                International Conference
              </span>

              <h3>
                Demo International Conference on AI, Education & Digital
                Transformation
              </h3>

              <p className="event-date">
                Sun, 4 Oct 2026 · 9:00 AM · Africa/Lagos
              </p>

              <p className="event-location">
                University Conference Centre / Online
              </p>
            </div>

            <button className="download-btn">
              Download ICS
            </button>
          </div>


          <div className="calendar-event">
            <div className="event-content">
              <span className="event-tag">Conference</span>

              <h3>
                Demo University Research & Innovation Conference
              </h3>

              <p className="event-date">
                Wed, 14 Oct 2026 · 10:00 AM · Africa/Lagos
              </p>

              <p className="event-location">
                University Main Auditorium
              </p>
            </div>

            <button className="download-btn">
              Download ICS
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Calendar;