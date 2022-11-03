import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav/nav'
import HomePage from './pages/home-page/home-page';
import Education from './pages/education/education'
import WorkExperience from './pages/work-experience/work-experience';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabValue: Number(localStorage.getItem('activeTab')),
      navTitleText: 'josh_rumsey_sde'
    }
    // Add function binding here
    this.handleNavChange = this.handleNavChange.bind(this);
  }

  // Allows ability to update tab from nav or footer
  handleNavChange(e, newActiveTab) {
    this.setState({tabValue: newActiveTab})
    localStorage.setItem('activeTab', Number(newActiveTab))
  }

  render() {
    return (
      <div className="App">
        {/* For the future, add routing to project */}
        <BrowserRouter>
          <Nav tabValue={this.state.tabValue} handleNavChange={this.handleNavChange} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<WorkExperience />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer tabValue={this.state.tabValue} handleNavChange={this.handleNavChange} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
