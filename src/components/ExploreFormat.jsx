import { useNavigate } from "react-router-dom";
import "./ExploreFormat.css";

function ExploreFormat() {
  const navigate = useNavigate();

  const formats = [
    {
      short: "IC",
      title: "International Conferences",
      upcoming: "1 upcoming",
      className: "international",
      path: "international-conferences",
    },
    {
      short: "CF",
      title: "Conferences",
      upcoming: "1 upcoming",
      className: "conferences",
      path: "conferences",
    },
    {
      short: "SE",
      title: "Seminars",
      upcoming: "1 upcoming",
      className: "seminars",
      path: "seminars",
    },
    {
      short: "WS",
      title: "Workshops",
      upcoming: "1 upcoming",
      className: "workshops",
      path: "workshops",
    },
    {
      short: "WB",
      title: "Webinars",
      upcoming: "0 upcoming",
      className: "webinars",
      path: "webinars",
    },
    {
      short: "TR",
      title: "Training & Development",
      upcoming: "1 upcoming",
      className: "training",
      path: "training-development",
    },
  ];

  return (
    <section className="explore-section">
      <div className="explore-header">
        <div>
          <p className="section-label">EXPLORE BY FORMAT</p>

          <h2>Every Event. One FUTO Platform.</h2>

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
          <div
            className={`format-card ${format.className}`}
            key={format.short}
            onClick={() => navigate(`/events/${format.path}`)}
            style={{ cursor: "pointer" }}
          >
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