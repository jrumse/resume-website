import React , { Component } from 'react';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import githubLogo from '../../assets/images/GitHub-Mark-Light-32px.png'
import linkedInLogo from '../../assets/images/In-White-34.png'
import documentLogo from '../../assets/images/document-32.png'
import reactWhiteLogo from '../../assets/images/reactLogoWhite.png'
import expressJsLogo from '../../assets/images/expressjslogosmall.png'
import mongoDbLogo from '../../assets/images/mongodblogosmall.png'
import awsLogo from '../../assets/images/awslogosmall.png'
import resume from '../../assets/documents/resume.pdf'
import './footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // Add function binding here
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleNavChange(null, Number(e.target.getAttribute("value")));
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="Footer" data-testid="Footer">
        <Divider className="divider" />
        <div className="hTitle">
          <div>
            josh_rumsey_sde
          </div>
          <div className="footerTitleSpacing" />
        </div>
        <div className="hContent">
          <div>
            {/* Overview Column */}
            <h2>Overview</h2>
            <div className="footerLinks">
              <Link to="/" className="footerLink">
                <h3 value={0} onClick={this.handleClick}>About</h3>
              </Link>
              <Link to="education" className="footerLink" >
                <h3 value={1} onClick={this.handleClick}>Education</h3>
              </Link>
              <Link to="experience" className="footerLink" >
                <h3 value={2} onClick={this.handleClick}>Experience</h3>
              </Link>
              <Link to="contact" className="footerLink" >
                <h3 value={3} onClick={this.handleClick}>Contact</h3>
              </Link>
            </div>
          </div>
          {/* Resources */}
          <div>
            <h2>Resources</h2>
            <div className="footerLinks">
              <a href="https://github.com/jrumse" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo">
                  <h3 className="linkText">GitHub</h3>
                  <img src={githubLogo} alt="githubLogo" className="linkLogo" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/joshrumsey" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo">
                  <h3 className="linkText">LinkedIn</h3>
                  <img src={linkedInLogo} alt="linkedInLogo" className="linkLogo" />
                </div>
              </a>
              <a href={resume} download="joshRumseyResume" className="footerLink" >
                <div className="textWithLogo" >
                  <h3 className="linkText" >Resume</h3>
                  <img src={documentLogo} alt="downloadResumeLogo" className="linkLogo" />
                </div>
              </a>
            </div>
          </div>
          <div>
          <h2>Powered By</h2>
            <div className="footerLinks">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo" >
                  <h3 className="linkText">React</h3>
                  <img src={reactWhiteLogo} alt="reactWhiteLogo" className="linkLogo" />
                </div>
              </a>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo" >
                  <h3 className="linkText">ExpressJS</h3>
                  <img src={expressJsLogo} alt="reactWhiteLogo" className="linkLogo" />
                </div>
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo" >
                  <h3 className="linkText">MongoDB</h3>
                  <img src={mongoDbLogo} alt="reactWhiteLogo" className="linkLogo" />
                </div>
              </a>
              <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer noopener" className="footerLink" >
                <div className="textWithLogo" >
                  <h3 className="linkText">AWS</h3>
                  <img src={awsLogo} alt="reactWhiteLogo" className="linkLogo" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;