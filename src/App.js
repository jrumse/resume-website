import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav/nav'
import HomePage from './pages/home-page/home-page';
import Education from './pages/education/education'
import WorkExperience from './pages/work-experience/work-experience';
import Contact from './pages/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* For the future, add routing to project */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<WorkExperience />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
