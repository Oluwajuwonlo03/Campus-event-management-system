import { useState } from "react";

function Register({ onBack, onHaveAccount }) {
  const [formData, setFormData] = useState({
    registerAs: "Student",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    telephone: "",
    matricNumber: "",
    studentLevel: "",
    faculty: "",
    department: "",
    programme: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.matricNumber ||
      !formData.faculty ||
      !formData.department ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields (*)");
      return;
    }

    if (formData.password.length < 12) {
      setError("Password must be at least 12 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Success
    console.log("Account created with data:", formData);
    setSuccess(true);

    // Optional: clear form after success
    // setFormData({ registerAs: "Student", firstName: "", ... })
  };

  return (
    <section className="register-container">
      <div className="form-section">
        <button className="regis-btn" type="button">
          Participant Registration
        </button>
        <h1 className="acc-text">Create your account</h1>
        <p className="note">
          Register once, then use your participant dashboard for eligible
          university events.
        </p>

        <form onSubmit={handleSubmit}>
          {/* REGISTER AS */}
          <div className="register-padding">
            <h2>Register As</h2>
            <div className="register-options">
              {["Student", "Staff", "External Participant"].map((option) => (
                <label
                  key={option}
                  className={
                    formData.registerAs === option
                      ? "register-option-active"
                      : "register-option"
                  }
                >
                  <input
                    type="radio"
                    name="registerAs"
                    value={option}
                    checked={formData.registerAs === option}
                    onChange={handleChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <div className="personal-overall">
            <h2>Personal Details</h2>

            <div className="personal-details-option">
              <div className="personal-form">
                <label>
                  First name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="personal-input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-form">
                <label>Middle name</label>
                <br />
                <input
                  type="text"
                  className="personal-input"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>

              <div className="personal-form">
                <label>
                  Last name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  className="personal-input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>
                  Email address <span>*</span>
                </label>
                <br />
                <input
                  type="email"
                  className="email-btn"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="tel-btn">
                <label className="telephone">Telephone</label>
                <br />
                <input
                  type="tel"
                  className="tel-button"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* STUDENT DETAILS */}
          <div className="overall-students">
            <h2>Student Details</h2>

            <div className="student-details">
              <div className="student-option">
                <label>
                  Matriculation Number <span>*</span>
                </label>
                <input
                  type="text"
                  className="student-input"
                  name="matricNumber"
                  value={formData.matricNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="student-option">
                <label>Student Level</label>
                <br />
                <select
                  className="student-input"
                  name="studentLevel"
                  value={formData.studentLevel}
                  onChange={handleChange}
                >
                  <option value="">Select Level</option>
                  <option value="100 Level">100 Level</option>
                  <option value="200 Level">200 Level</option>
                  <option value="300 Level">300 Level</option>
                  <option value="400 Level">400 Level</option>
                  <option value="500 Level">500 Level</option>
                </select>
              </div>
            </div>

            <div className="faulty-display">
              <div>
                <label>
                  Faculty <span>*</span>
                </label>
                <br />
                <select
                  className="faulty-option"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                >
                  <option value="">Select faculty</option>
                  <option value="COLLEGE OF MEDICINE">COLLEGE OF MEDICINE</option>
                  <option value="Faculty of Agriculture">Faculty of Agriculture</option>
                  <option value="Faculty of Arts">Faculty of Arts</option>
                  <option value="Faculty of Basic Medical Sciences">Faculty of Basic Medical Sciences</option>
                  <option value="Faculty of Communication & Media Studies">Faculty of Communication & Media Studies</option>
                  <option value="Faculty of Computer & Information Engineering">Faculty of Computer & Information Engineering</option>
                  <option value="Faculty of Computing">Faculty of Computing</option>
                  <option value="Faculty of Education">Faculty of Education</option>
                  <option value="Faculty of Engineering">Faculty of Engineering</option>
                  <option value="Faculty of Environmental Design & Management">Faculty of Environmental Design & Management</option>
                  <option value="Faculty of Law">Faculty of Law</option>
                  <option value="Faculty of Life Sciences">Faculty of Life Sciences</option>
                  <option value="Faculty of Management Sciences">Faculty of Management Sciences</option>
                  <option value="Faculty of Multidisciplinary Studies">Faculty of Multidisciplinary Studies</option>
                </select>
              </div>

              <div>
                <label>
                  Department <span>*</span>
                </label>
                <br />
                <select
                  className="faulty-option"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
              </div>

              <div>
                <label>Programme</label>
                <br />
                <select
                  className="faulty-option"
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                >
                  <option value="">Select programme</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </div>
          </div>

          {/* ACCOUNT SECURITY */}
          <div className="overall-account">
            <h2>Account Security</h2>

            <div className="account">
              <div>
                <label>
                  Password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  className="pass-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>
                  Confirm password <span>*</span>
                </label>
                <br />
                <input
                  type="password"
                  className="pass-input"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <p>Minimum 12 characters.</p>
            </div>
          </div>

          {/* Error / Success Messages */}
          {error && (
            <p style={{ color: "red", marginTop: "15px", fontWeight: "500" }}>
              {error}
            </p>
          )}
          {success && (
            <p style={{ color: "green", marginTop: "15px", fontWeight: "500" }}>
              Account created successfully!
            </p>
          )}

          {/* CREATE ACCOUNT BUTTON */}
          <div style={{ marginTop: "30px" }}>
            <button type="submit" className="signin-submit">
              Create Account
            </button>
          </div>
        </form>

        <div className="links" style={{ marginTop: "20px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHaveAccount();
            }}
          >
            Already have an account? Sign in
          </a>
        </div>

        <button
          className="back-btn"
          onClick={onBack}
          style={{ marginTop: "15px" }}
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}

export default Register;