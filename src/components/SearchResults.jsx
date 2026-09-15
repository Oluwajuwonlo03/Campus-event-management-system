function SearchResults({ results, onBack }) {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: "25px",
          padding: "10px 18px",
          backgroundColor: "#0f3822",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back to Home
      </button>

      <h1 style={{ color: "#0f3822", marginBottom: "30px" }}>
        Search Results ({results.length})
      </h1>

      {results.length === 0 ? (
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          No events found. Try different filters.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {results.map((event) => (
            <div
              key={event.id}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                border: "1px solid #e5ebe7",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#0f3822" }}>{event.title}</h3>
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Delivery:</strong> {event.delivery}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;