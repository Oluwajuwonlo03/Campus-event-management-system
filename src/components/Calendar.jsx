import "./Calendar.css";

const events = [
  {
    month: "September 2026",
    items: [
      {
        type: "Workshop",
        title: "Demo Digital Skills & Research Tools Workshop",
        date: "Sun, 13 Sep 2026",
        time: "9:00 AM",
        location: "ICT Training Laboratory",
        timezone: "Africa/Lagos",
        ics: true,
      },
      {
        type: "Training / Professional Development",
        title: "Demo Professional Training & Development Programme",
        date: "Sat, 19 Sep 2026",
        time: "9:30 AM",
        location: "Training Centre / Online",
        timezone: "Africa/Lagos",
        ics: true,
      },
    ],
  },
  {
    month: "October 2026",
    items: [
      {
        type: "International Conference",
        title:
          "Demo International Conference on AI, Education & Digital Transformation",
        date: "Sun, 4 Oct 2026",
        time: "9:00 AM",
        location: "University Conference Centre / Online",
        timezone: "Africa/Lagos",
        ics: true,
      },
      {
        type: "Conference",
        title: "Demo University Research & Innovation Conference",
        date: "Wed, 14 Oct 2026",
        time: "10:00 AM",
        location: "University Main Auditorium",
        timezone: "Africa/Lagos",
        ics: true,
      },
    ],
  },
];

function Calendar() {
  return (
    <main className="calendar-page">

      {/* HERO SECTION */}
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

      {/* EVENTS */}
      <section className="calendar-events">
        <div className="calendar-container">

          {events.map((month) => (
            <div className="calendar-month" key={month.month}>

              <h2>{month.month}</h2>

              <div className="events-grid">
                {month.items.map((event) => (
                  <div className="calendar-card" key={event.title}>

                    <div className="event-card-content">

                      <span className="event-type">
                        {event.type}
                      </span>

                      <h3>{event.title}</h3>

                      <p className="event-date">
                        {event.date} · {event.time} · {event.timezone}
                      </p>

                      <p className="event-location">
                        {event.location}
                      </p>

                    </div>

                    {event.ics && (
                      <button className="download-ics">
                        Download
                        <span>ICS</span>
                      </button>
                    )}

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Calendar;