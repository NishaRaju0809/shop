import React from "react";
import "./App.css";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import About from "./routes/About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
