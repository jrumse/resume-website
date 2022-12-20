import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './nav.css';
import { useLocation } from 'react-router-dom'
import { tabMap } from '../../models/enums/tabmap.enum';

function Nav(props) {
  // State
  const [navTitleText ] = useState('josh_rumsey_sde');
  const location = useLocation()

  // Set Nav on init
  useEffect(() => {
    props.handleNavChange(null, tabMap[location.pathname])
  }, []);

  // Reset Nav
  const resetNav = () => {
    props.handleNavChange(null, 0)
  }

  return (
    <div className="navContent">
      {/* TODO */}
      <div className="title"><Link to="/" className="linkMain" 
      onClick={resetNav}>{navTitleText}</Link></div>
      <div className="navLinks">
        <Tabs value={props.tabValue} onChange={props.handleNavChange}>
          <Tab label="About" component={Link} to="/" className="link" />
          <Tab label="Education" component={Link} to="education" className="link" />
          <Tab label="Work Experience" component={Link} to="experience" className="link" />
          <Tab label="Contact" component={Link} to="contact" className="link" />
        </Tabs>
      </div>
    </div>
  );
}

export default Nav;