import { useState } from "react";

function Verify({ onBack }) {
  const [certNumber, setCertNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = () => {
    if (certNumber === "") {
      setResult({
        verified: false,
        message: "Please enter a certificate number."
      });
      return;
    }

    if (certNumber === "FUTO-2026-001") {
      setResult({
        verified: true,
        name: "Sharon Venas",
        certificate: "Event Participation Certificate",
        event: "FUTO Tech Conference 2026",
        date: "September 10, 2026",
        status: "Valid"
      });
    } else {
      setResult({
        verified: false,
        message: "Certificate not found. Please check the certificate number."
      });
    }
  };

  return (
    <div className=" verify-container">
      <div>
        <button className="verify-btn">Public Credential Verification</button>

      <h1 className="verify-title">Verify a University Certificate</h1>

      <p className="verify-subtitle">
        Enter the certificate number or scan the QR code printed on the
        credential.
      </p>

      <div className="verify-card">
            <input
        type="text"
        className="verify-input"
        value={certNumber}
        onChange={(e) => setCertNumber(e.target.value)}
        placeholder="Enter certificate number"
      />
      <button className="verify-submit" onClick={handleVerify}>
        Verify
      </button>
      </div>

      {result && (
        <div>
          {result.verified ? (
            <>
              <h2>✓ Certificate Verified</h2>

              <p>Name: {result.name}</p>
              <p>Certificate: {result.certificate}</p>
              <p>Event: {result.event}</p>
              <p>Date: {result.date}</p>
              <p>Status: {result.status}</p>
            </>
          ) : (
            <p>❌ {result.message}</p>
          )}
        </div>
      )}

      <button className="back-btn" onClick={onBack}>
        ← Back to Home
      </button>
      </div>
    </div>
  );
}

export default Verify;