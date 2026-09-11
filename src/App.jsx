import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults";

import "./App.css";

function App() {
  const [view, setView] = useState("home");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
    setView("search");
  };

  return (
    <>
      <Navbar
        onShowSignin={() => setView("signin")}
        onShowSignup={() => setView("signup")}
        onBackHome={() => setView("home")}
      />

      {view === "home" && (
        <Home onSearch={handleSearch} />
      )}

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

      {view === "search" && (
        <SearchResults
          results={searchResults}
          onBack={() => setView("home")}
        />
      )}
    </>
  );
}

export default App;