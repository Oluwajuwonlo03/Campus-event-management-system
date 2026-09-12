import { useState } from "react";

function Signin({ onBack, onCreateAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }
    alert("Sign in successful!");
  };

  return (
    <div className="con">
      <div className="auth-container">
        <div className="signin-header">
          <button className="secure-btn">Secure Account Access</button>
          <h2 className="sign">Sign in</h2>
          <p>
            Enter your registered email address and password
            <br />
            to access your account.
          </p>

          <form onSubmit={handleSubmit}>
            <p className="email">Email address</p>
            <input
              className="input-address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="pass">Password</p>
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show password</span>
            </div>

            <button type="submit" className="signin-submit">
              Sign In
            </button>
          </form>

          <div className="txt">
            <p>
              <strong>FUTO Student: </strong>
              Sign in with your registered email
              <br />
              address and use your Matriculation Number as the
              <br />
              temporary password. You will be required to create a
              <br />
              new password immediately after first login.
            </p>
          </div>

          <div className="links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCreateAccount();
              }}
            >
              Create account
            </a>
            <a href="#forgot">Forgot password?</a>
            <a href="#resend">Resend verification</a>
          </div>

          <button className="back-btn" onClick={onBack}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;