import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './nav.css';

class Nav extends Component {

    constructor(props) {
      super(props);
      this.state = {
        navTitleText: 'josh_rumsey_sde'
      }
      // Add function binding here
      this.resetNav = this.resetNav.bind(this);
      this.onMouseover = this.onMouseover.bind(this);
      this.onMouseout = this.onMouseout.bind(this);
    }

    resetNav() {
      this.props.handleNavChange(null, 0)
    }

    //set the text
    onMouseover (e) {
      this.setState({navTitleText : 'josh_rumsey_software_development_engineer'})
    }

    //clear the text
    onMouseout (e) {
      this.setState({navTitleText : 'josh_rumsey_sde'})
    }
  
    render() {
      return (
        <div className="navContent">
          {/* TODO */}
          <div className="title"><Link to="/" className="linkMain" 
          onClick={this.resetNav}
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{this.state.navTitleText}</Link></div>
          <div className="navLinks">
            <Tabs value={this.props.tabValue} onChange={this.props.handleNavChange}>
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