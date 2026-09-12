import { useNavigate } from "react-router-dom";

function FeaturedEvents() {
  const navigate = useNavigate();
  const events = [
    {
      type: "International Conference",
      status: "Call for Papers Open",
      day: "04",
      month: "OCT",
      year: "2026",
      title: "Demo International Conference on AI, Education & Digital Transformation",
      subtitle:
        "Responsible AI, Inclusive Education and Digital Transformation",
      description:
        "A demonstration international conference showcasing the platform’s delegate, programme, Call for Papers and hybrid-event capabilities.",
      format: "Hybrid",
      location: "Owerri, Nigeria",
    },
    {
      type: "Conference",
      day: "14",
      month: "OCT",
      year: "2026",
      title: "Demo University Research & Innovation Conference",
      subtitle:
        "Research, Innovation and Sustainable University Development",
      description:
        "A sample university conference for research presentations, keynote sessions, panels and networking.",
      format: "Physical",
      location: "Owerri, Nigeria",
    },
    {
      type: "Webinar",
      day: "01",
      month: "SEP",
      year: "2026",
      title: "Demo Global Webinar: Future-Ready University Learning",
      subtitle:
        "Technology-Enabled Learning Without Borders",
      description:
        "A demonstration webinar for remote and diaspora participation using secure online access and attendance evidence.",
      format: "Online",
      location: "Online, Global",
    },
  ];

  return (
    <section className="featured-events">

      <div className="featured-header">

        <div>
          <p className="section-label">ACADEMIC SPOTLIGHT</p>

          <h2>Featured conferences & academic events</h2>

          <p className="section-description">
            High-impact scholarly and professional events from across the
            university.
          </p>
        </div>

        <a href="#" className="view-all">
          View all conferences →
        </a>

      </div>

      <div className="events-grid">

        {events.map((event, index) => (
          <div className="event-card" key={index}>

            <div className="event-top">

              <div className="event-tags">

                <span className="event-type">
                  {event.type}
                </span>

                {event.status && (
                  <span className="event-status">
                    {event.status}
                  </span>
                )}

              </div>

              <div className="event-date">
                <strong>{event.day}</strong>

                <span>
                  {event.month} {event.year}
                </span>
              </div>

            </div>

            <div className="event-content">

              <h3>{event.title}</h3>

              <h4>{event.subtitle}</h4>

              <p className="event-description">
                {event.description}
              </p>

              <div className="event-info">
                <span>{event.format}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>

             <button
              className="explore-button"
              onClick={() => {
              const eventPaths = [
                "international-conference",
                "conference",
                "webinar",
              ];

              navigate(`/featured-events/${eventPaths[index]}`);
              }}
              >
              Explore Event
            </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedEvents;