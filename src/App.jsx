import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Home } from "./components/pages/Home";
import Academics from "./components/pages/Academics";
import Facilities from "./components/pages/Facilities";
import Alumni from "./components/pages/Alumni";
import Achievements from "./components/pages/Achievements";
import Societies from "./components/pages/Societies";
import QuickLinks from "./components/pages/QuickLinks";
import ContactUs from "./components/pages/ContactUs";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'

const locomotiveScroll = new LocomotiveScroll({
  smooth: true,
});

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <header className="shadow-xl shadow-cyan-500/50">
          <Navbar />
        </header>

        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/quick-links" element={<QuickLinks />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;