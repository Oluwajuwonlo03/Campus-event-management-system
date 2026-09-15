import { useLocation, useNavigate } from "react-router-dom";
import "./EventCategory.css";

function EventCategory() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = decodeURIComponent(
    location.pathname.split("/").pop()
  );

  const events = {
    "international-conferences": [
      {
        title:
          "Demo International Conference on AI, Education & Digital Transformation",
        date: "Sun, 4 Oct 2026",
        time: "9:00 AM",
        location: "University Conference Centre / Online",
        format: "International Conference",
      },
    ],

    conferences: [
      {
        title: "Demo University Research & Innovation Conference",
        date: "Wed, 14 Oct 2026",
        time: "10:00 AM",
        location: "University Main Auditorium",
        format: "Conference",
      },
    ],

    seminars: [
      {
        title: "Demo Distinguished Academic Seminar Series",
        date: "Mon, 7 Sep 2026",
        time: "1:00 PM",
        location: "University Seminar Hall",
        format: "Seminar",
      },
    ],

    workshops: [
      {
        title: "Demo Digital Skills & Research Tools Workshop",
        date: "Sun, 13 Sep 2026",
        time: "9:00 AM",
        location: "ICT Training Laboratory",
        format: "Workshop",
      },
    ],

    webinars: [
      {
        title: "Demo Global Webinar: Future-Ready University Learning",
        date: "Tue, 1 Sep 2026",
        time: "3:00 PM",
        location: "Online",
        format: "Webinar",
      },
    ],

    "training-development": [
      {
        title: "Demo Professional Training & Development Programme",
        date: "Sat, 19 Sep 2026",
        time: "9:30 AM",
        location: "Training Centre / Online",
        format: "Training / Professional Development",
      },
    ],
  };

  const selectedEvents = events[category] || [];

  const categoryNames = {
    "international-conferences": "International Conferences",
    conferences: "Conferences",
    seminars: "Seminars",
    workshops: "Workshops",
    webinars: "Webinars",
    "training-development": "Training & Development",
  };

  const categoryTitle = categoryNames[category] || "Events";

  return (
    <section className="event-category-page">
      <div className="event-category-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <p className="section-label">FUTO EVENTS</p>

        <h1>{categoryTitle}</h1>

        <p>
          Explore upcoming {categoryTitle.toLowerCase()} events
          on the FUTO Events platform.
        </p>
      </div>

      <div className="event-category-list">
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event, index) => (
            <div className="category-event-card" key={index}>
              <span className="category-event-tag">
                {event.format}
              </span>

              <h2>{event.title}</h2>

              <p>
                📅 {event.date}
              </p>

              <p>
                🕐 {event.time}
              </p>

              <p>
                📍 {event.location}
              </p>

              <button className="category-event-button">
                View Event
              </button>
            </div>
          ))
        ) : (
          <div className="no-events">
            <h2>No upcoming events</h2>
            <p>
              There are currently no upcoming events in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default EventCategory;