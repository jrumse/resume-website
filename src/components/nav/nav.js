import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './nav.css';
import { useLocation } from 'react-router-dom'
import { tabMap } from '../../models/enums/tabmap.enum';

/**
 *  Nav Bar Component.
 * @param {Object} props 
 * @returns {Template}
 */
function Nav(props) {
  
  /**
   * Navigation Bar Title Text.
   */
  const [ navTitleText ] = useState('josh_rumsey_sde');

  /**
   * Active location within the web application.
   */
  const location = useLocation();

  /**
   * Sets the default value of the Navigation on init.
   */
  useEffect(() => {
    props.handleNavChange(null, tabMap[location.pathname])
  }, []);

  /**
   * Reset navigation.
   */
  const resetNav = () => {
    props.handleNavChange(null, 0)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className="navContent">
      <div className="title"><Link to="/" className="linkMain" 
      onClick={resetNav}>{navTitleText}</Link></div>
      <div className="navLinks">
        <Tabs value={props.tabValue} variant="fullWidth" onChange={props.handleNavChange} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          <Tab label="About" component={Link} to="/" className="link" />
          <Tab label="Education" component={Link} to="education" className="link" />
          <Tab label="Experience" component={Link} to="experience" className="link" />
          <Tab label="Contact" component={Link} to="contact" className="link" />
        </Tabs>
      </div>
    </div>
  );
}

export default Nav;
