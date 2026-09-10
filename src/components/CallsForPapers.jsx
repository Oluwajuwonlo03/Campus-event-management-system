import "./CallsForPapers.css";

function CallsForPapers() {
  return (
    <section className="calls-section">
      <div className="calls-container">

        {/* Left side */}
        <div className="calls-intro">
          <p className="calls-label">FOR RESEARCHERS & PRESENTERS</p>

          <h2>
            Calls for Papers
            <br />
            now open
          </h2>

          <p className="calls-description">
            Submit abstracts, papers, posters and scholarly proposals through
            the university's secure conference submission and peer-review
            workflow.
          </p>

          <button className="explore-conferences">
            Explore Conferences
          </button>
        </div>

        {/* Right side */}
        <div className="paper-card">
          <div className="paper-header">
            <span>International Conference</span>
            <p>Double Blind</p>
          </div>

          <h3>
            Demo International Conference on AI,
            <br />
            Education & Digital Transformation
          </h3>

          <h4>
            Responsible AI, Inclusive Education and Digital Transformation
          </h4>

          <div className="deadline">
            <span>Abstract deadline</span>
            <strong>9 Sep 2026</strong>
          </div>

          <div className="paper-buttons">
            <button className="submit-button">
              Submit Abstract
            </button>

            <button className="details-button">
              Details
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CallsForPapers;