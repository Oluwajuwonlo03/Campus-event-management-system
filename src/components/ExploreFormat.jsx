import "./ExploreFormat.css";
function ExploreFormat() {
  const formats = [
    {
      short: "IC",
      title: "International Conferences",
      upcoming: "1 upcoming",
      className: "international",
    },
    {
      short: "CF",
      title: "Conferences",
      upcoming: "1 upcoming",
      className: "conferences",
    },
    {
      short: "SE",
      title: "Seminars",
      upcoming: "1 upcoming",
      className: "seminars",
    },
    {
      short: "WS",
      title: "Workshops",
      upcoming: "1 upcoming",
      className: "workshops",
    },
    {
      short: "WB",
      title: "Webinars",
      upcoming: "0 upcoming",
      className: "webinars",
    },
    {
      short: "TR",
      title: "Training & Development",
      upcoming: "1 upcoming",
      className: "training",
    },
  ];

  return (
    <section className="explore-section">
      <div className="explore-header">
        <div>
          <p className="section-label">EXPLORE BY FORMAT</p>

          <h2>Every Event. One FUOYE Platform.</h2>

          <p className="section-description">
            Discover conferences, seminars, workshops, webinars, training and
            university programmes. Register, participate and manage your
            engagement and digital credentials—all from one secure platform.
          </p>
        </div>

        <button className="academic-button">
          Explore Academic Events
        </button>
      </div>

      <div className="format-grid">
        {formats.map((format) => (
          <div className={`format-card ${format.className}`} key={format.short}>
            <div className="format-icon">
              {format.short}
            </div>

            <h3>{format.title}</h3>

            <p>{format.upcoming}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreFormat;