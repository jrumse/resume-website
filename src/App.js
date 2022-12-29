import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import React, { useState } from 'react';
import Nav from './components/nav/nav'
import HomePage from './pages/home-page/home-page';
import Education from './pages/education/education'
import WorkExperience from './pages/work-experience/work-experience';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

function App() {
  // State
  const [tabValue, setTabValue] = useState(0);

  // Handle Nav Change
  const handleNavChange = (e, newActiveTab) => {
    // Set the new active tab
    setTabValue(newActiveTab)
  }

  // Render
  return (
    <div className="App">
      {/* For the future, add routing to project */}
      <BrowserRouter>
        <Nav tabValue={tabValue} handleNavChange={handleNavChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<WorkExperience />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer tabValue={tabValue} handleNavChange={handleNavChange} />
      </BrowserRouter>
    </div>
  );
}

export default App;