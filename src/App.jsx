import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [view, setView] = useState("home"); // "home" | "signin" | "signup"

  return (
    <>
      <Navbar
        onShowSignin={() => setView("signin")}
        onShowSignup={() => setView("signup")}
        onBackHome={() => setView("home")}
      />

      {view === "home" && <Home />}

      {view === "signin" && (
        <Signin
          onBack={() => setView("home")}
          onCreateAccount={() => setView("signup")}
        />
      )}

      {view === "signup" && (
        <Register
          onBack={() => setView("home")}
          onHaveAccount={() => setView("signin")}
        />
      )}
    </>
  );
}

export default App;