import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.css';

class Nav extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="navContent">
          <div className="title"><Link to="/" className="link">josh_rumsey_sde</Link></div>
          <div className="navLinks">
            <Link to="education" className="link">Education</Link>
            <Link to="experience" className="link">Work Experience</Link>
            <Link to="contact" className="link">Contact</Link>
          </div>
        </div>
      );
    }
}

export default Nav;