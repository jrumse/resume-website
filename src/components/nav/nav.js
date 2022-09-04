import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './nav.css';

class Nav extends Component {

    constructor(props) {
      super(props);
      this.state = {
        tabValue: 0
      }
      // Add function binding here
      this.handleNavChange = this.handleNavChange.bind(this);
      this.resetNav = this.resetNav.bind(this);
    }

    handleNavChange(e, newActiveTab) {
      this.setState({tabValue: newActiveTab})
    }

    resetNav() {
      this.setState({tabValue: 0})
    }
  
    render() {
      return (
        <div className="navContent">
          <div className="title"><Link to="/" className="link" onClick={this.resetNav}>josh_rumsey_sde</Link></div>
          <div className="navLinks">
            <Tabs value={this.state.tabValue} onChange={this.handleNavChange}>
              <Tab label="About" component={Link} to="/" className="link" />
              <Tab label="Education" component={Link} to="education" className="link" />
              <Tab label="Work Experience" component={Link} to="experience" className="link" />
              <Tab label="Contact" component={Link} to="contact" className="link" />
            </Tabs>
          </div>
        </div>
      );
    }
}

export default Nav;