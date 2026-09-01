function ExploreEvents() {
  const events = [
    {
      type: "Webinar",
      format: "Online",
      day: "01",
      month: "SEP",
      year: "2026",
      time: "3:00 PM",
      title: "Demo Global Webinar: Future-Ready University Learning",
      description: "A demonstration webinar for remote and diaspora participation using secure online access and attendance evidence.",
    },
    {
      type: "Seminar",
      format: "Hybrid",
      day: "07",
      month: "SEP",
      year: "2026",
      time: "1:00 PM",
      title: "Demo Distinguished Academic Seminar Series",
      description: "A demonstration seminar featuring scholarly dialogue, guest speakers and audience engagement.",
    },
    {
      type: "Workshop",
      format: "Physical",
      day: "13",
      month: "SEP",
      year: "2026",
      time: "9:00 AM",
      title: "Demo Digital Skills & Research Tools Workshop",
      description: "A hands-on demonstration workshop with limited capacity, attendance tracking, resources and certification.",
    },
  ];

  return (
    <section className="explore-events">
      <div className="explore-header">
        <p className="section-label">WHAT'S HAPPENING</p>
        <h2>Upcoming university events</h2>
        <p className="section-description">{events.length} events shown</p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-top">
              <div className="event-tags">
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-badge">
                {event.type.slice(0,2).toUpperCase()}
                </div>
                <div className="event-date">
                    <strong>{event.day}</strong>
                    <span>{event.month} {event.year}</span>
              </div>
            </div>

            <div className="event-content">
                <p className="event-category">{event.type}</p>
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-info">
                <span>{event.format}</span>
                <span>{event.time}</span>
              </div>
              <button className="explore-button">View Event →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreEvents;