import React , { Component } from 'react';
import './home-page.css';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  // Add function binding here

  render() {
    return (
      <div className="home-page">
        <div className="welcome">Welcome.</div>
      </div>
    );
  }
}

export default HomePage;
