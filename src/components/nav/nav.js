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
        <div>
          <div className={styles.Nav} data-testid="Nav">Nav Component</div>
					<Link to="/">Home</Link>
					<Link to="education">Education</Link>
					<Link to="experience">Work Experience</Link>
					<Link to="contact">Contact</Link>
        </div>
      );
    }
}

export default Nav;