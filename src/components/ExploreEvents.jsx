function ExploreEvents(){
  const events = [
    {
      type: "Webinar",
      format: "Online",
      bannerColor: "teal",
      badge: "WB",
      date: "Tue, 1 sep 2026",
      time: "3:00pm",
      title: "Demo Global Webinar: Future-Ready University Learning",
      description: "A demonstration webinar for remote and diaspora participationusing secure online access and attendance evidence.",
    },
    {
type: "Seminar",
      format: "Hybrid",
      bannerColor: "gold",
      badge: "SE",
      date: "Mon, 7 sep 2026",
      time: "1:00pm",
      title: "Demo Distinguished Academic Seminar series",
      description: "A demonstration seminar featuring scholarly dialogue, guest speakers and audience engagement.",
    },
    {
       type: "Workshop",
      format: "Physical",
      bannerColor: "purple",
      badge: "WS",
      date: "Sun, 13 sep 2026",
      time: "9:00am",
      title: "Demo Digital Skils & Research Tool Workshop",
      description: "A hands-on demonstration workshop with limited capacity, attendance tracking, resources and certification.",
    },
    {
      type: "Training/Professional Development",
      format: "Hybrid",
      bannerColor: "red",
      badge: "TR",
      date: "Sat, 19 sep 2026",
      time: "9:30AM",
      title: "Demo Professional Training & Development Programme",
      description: "A sample professional-development programme demonstrating multi-session training,attendance  and credential workflows"
    }
  ];

  return(
    <section className="explore-events">
      <div className="explore-header">
      <p className="section-label">WHAT'S HAPPENING</p>
      <h2>Upcoming university events</h2>
      <p className="section-description">{events.length} events shown</p>
      </div>

      <div className="explore-events-grid">
        {events.map((events, index) => (
          <div className="explore-event-card" key ={index}>
            <div className={`explore-event-top explore-banner-${events.bannerColor}`}>
              <span className="explore-event-format-tag">{events.format}</span>
              <div className="explore-event-badge">{events.badge}</div>
            </div>

            <div className="explore-event-content">
              <p className="explore-event-category">{events.type}</p>
              <h3>{events.title}</h3>
              <p className="explore-event-description">{events.description}</p>
                  <p className="explore-event-datetime">{events.date}<br />{events.time}</p>
                  <a href="#" className="explore-view-event-link">View Event</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExploreEvents;