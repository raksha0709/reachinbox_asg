import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ToggleButton from "./components/ToggleButton";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      <header className="header">
        <h1>Login</h1>
        <ToggleButton toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </header>
      <LoginPage />
      <footer>
        <p>&copy; 2024 ReachInbox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
