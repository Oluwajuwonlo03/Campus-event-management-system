import { useLocation, useNavigate } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const eventSlug = location.pathname.split("/").pop();

  const events = {
    "international-conference": {
      type: "International Conference",
      status: "Call for Papers Open",
      date: "04 Oct 2026",
      time: "9:00 AM",
      title:
        "Demo International Conference on AI, Education & Digital Transformation",
      subtitle:
        "Responsible AI, Inclusive Education and Digital Transformation",
      description:
        "A demonstration international conference showcasing the platform’s delegate, programme, Call for Papers and hybrid-event capabilities.",
      format: "Hybrid",
      location: "Owerri, Nigeria",
      sections: [
        "About",
        "Tracks",
        "Speakers",
        "Programme",
        "Call for Papers",
        "Registration",
        "Venue & Travel",
        "Committees",
      ],
    },

    conference: {
      type: "Conference",
      date: "14 Oct 2026",
      time: "10:00 AM",
      title: "Demo University Research & Innovation Conference",
      subtitle:
        "Research, Innovation and Sustainable University Development",
      description:
        "A sample university conference for research presentations, keynote sessions, panels and networking.",
      format: "Physical",
      location: "Owerri, Nigeria",
      sections: [
        "About",
        "Programme",
        "Speakers",
        "Registration",
        "Venue",
      ],
    },

    webinar: {
      type: "Webinar",
      date: "01 Sep 2026",
      time: "3:00 PM",
      title: "Demo Global Webinar: Future-Ready University Learning",
      subtitle: "Technology-Enabled Learning Without Borders",
      description:
        "A demonstration webinar for remote and diaspora participation using secure online access and attendance evidence.",
      format: "Online",
      location: "Online, Global",
      sections: [
        "About",
        "Programme",
        "Speakers",
        "Registration",
        "Online Access",
      ],
    },
  };

  const event = events[eventSlug];

  if (!event) {
    return (
      <div className="event-details-page">
        <div className="event-not-found">
          <h1>Event not found</h1>

          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="event-details-page">

      {/* HERO */}
      <section className="event-details-hero">
        <div className="event-details-hero-content">

          <button
            className="event-back-button"
            onClick={() => navigate("/")}
          >
            ← Back to Events
          </button>

          <div className="event-details-tags">

            <span className="event-details-type">
              {event.type}
            </span>

            {event.status && (
              <span className="event-details-status">
                {event.status}
              </span>
            )}

          </div>

          <h1>{event.title}</h1>

          <p className="event-details-subtitle">
            {event.subtitle}
          </p>

        </div>
      </section>

      {/* EVENT INFORMATION */}
      <section className="event-info-section">

        <div className="event-info-grid">

          <div>
            <span>Date</span>
            <strong>{event.date}</strong>
          </div>

          <div>
            <span>Time</span>
            <strong>{event.time}</strong>
          </div>

          <div>
            <span>Format</span>
            <strong>{event.format}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{event.location}</strong>
          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="event-details-content">

        <main className="event-main-content">

          <h2>About the Event</h2>

          <p>{event.description}</p>

          <div className="event-sections">

            {event.sections.map((section, index) => (
              <div
                className="event-section-card"
                key={index}
              >
                <h3>{section}</h3>

                <p>
                  Information about {section.toLowerCase()} for this
                  event will be available on the FUTO Events platform.
                </p>
              </div>
            ))}

          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="event-sidebar">

          <div className="event-action-card">

            <h3>Interested in this event?</h3>

            <button
                className="register-event-button"
                onClick={() => navigate("/register")}
            >
                Register for Event
            </button>

            <button
                className="secondary-event-button"
                onClick={() => navigate("/calendar")}
            >
                Add to Calendar
            </button>

          </div>

        </aside>

      </section>

    </div>
  );
}

export default EventDetails;