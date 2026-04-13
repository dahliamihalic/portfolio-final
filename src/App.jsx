import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CurrentWorks from "./pages/CurrentWorks";
import PastProjects from "./pages/PastProjects";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <HashRouter>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-content">
        <title>Dahlia Mihalic - Data Visualization and Web Development</title>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-works" element={<CurrentWorks />} />
          <Route path="/past-projects" element={<PastProjects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
