import { useState } from "react";

function SearchEvent() {
  const [filters, setFilters] = useState({
    keyword: "",
    eventType: "All types",
    delivery: "All modes",
    when: "Upcoming",
    category: "All categories",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching with filters:", filters);

    // Temporary feedback
    alert(
      `Searching events...\n\nKeyword: ${filters.keyword || "Any"}\nType: ${filters.eventType}\nDelivery: ${filters.delivery}\nWhen: ${filters.when}\nCategory: ${filters.category}`
    );

    // Later you can filter real events here
  };

  return (
    <section className="event-section">
      <div className="event-search-box">
        <div className="event-small-title">
          <p className="text-1">FIND YOUR NEXT EVENT</p>
          <p className="text-2">
            Search conferences, seminars, workshops, webinars and university
            programmes
          </p>
        </div>

        <form onSubmit={handleSearch}>
          <div className="search-row">
            {/* Keyword */}
            <div className="form-group">
              <label className="key-word">Keyword</label>
              <br />
              <input
                type="text"
                name="keyword"
                placeholder="Event, theme, organiser or keyword"
                className="keyword-btn"
                value={filters.keyword}
                onChange={handleChange}
              />
            </div>

            {/* Event type */}
            <div className="form-group">
              <label>Event type</label>
              <br />
              <select
                name="eventType"
                value={filters.eventType}
                onChange={handleChange}
              >
                <option>All types</option>
                <option>General University Event</option>
                <option>International Conference</option>
                <option>Conference</option>
                <option>Symposium</option>
                <option>Seminar</option>
                <option>Workshop</option>
                <option>Webinar</option>
                <option>Training / Professional Development</option>
                <option>Orientation</option>
                <option>Special University Programme</option>
              </select>
            </div>

            {/* Delivery */}
            <div className="form-group">
              <label>Delivery</label>
              <br />
              <select
                name="delivery"
                value={filters.delivery}
                onChange={handleChange}
              >
                <option>All modes</option>
                <option>Online</option>
                <option>Physical</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* When */}
            <div className="form-group">
              <label>When</label>
              <br />
              <select name="when" value={filters.when} onChange={handleChange}>
                <option>Upcoming</option>
                <option>All published</option>
                <option>Past events</option>
              </select>
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Category</label>
              <br />
              <select
                name="category"
                value={filters.category}
                onChange={handleChange}
              >
                <option>All categories</option>
                <option>Career Development</option>
                <option>Conference</option>
                <option>Digital Orientation</option>
                <option>Entrepreneurship</option>
                <option>Research</option>
                <option>Seminar</option>
                <option>Staff Development</option>
                <option>Student Orientation</option>
                <option>Technical Training</option>
                <option>Workshop</option>
              </select>
            </div>
          </div>

          <div className="search-button">
            <div className="date-group">
              <label>From date</label>
              <br />
              <input
                type="date"
                name="fromDate"
                value={filters.fromDate}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
              />
            </div>

            <div className="date-group">
              <label>To date</label>
              <br />
              <input
                type="date"
                name="toDate"
                value={filters.toDate}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
              />
            </div>

            <button type="submit" className="search-btn">
              Search Events
            </button>
          </div>
        </form>
      </div>

      {/* Statistics (kept the same) */}
      <div className="event-statistics">
        <div className="event-five">
          <strong>5</strong>
          <p>UPCOMING EVENTS</p>
        </div>

        <div className="event-four">
          <strong>4</strong>
          <p>ACADEMIC EVENTS</p>
        </div>

        <div className="event-zero">
          <strong>0</strong>
          <p>PARTICIPANT REGISTRATIONS</p>
        </div>

        <div className="event-two">
          <strong>2</strong>
          <p>COUNTRIES REPRESENTED</p>
        </div>
      </div>
    </section>
  );
}

export default SearchEvent;