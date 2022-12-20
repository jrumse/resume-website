import React , { Component } from 'react';
import { aboutMePost, programmingLanguagesPost } from '../../models/enums/homepage.enum'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Post from '../../components/post/post';
import reactLogo from '../../assets/images/reactLogo.png'
import angularLogo from '../../assets/images/angular-logo.png'
import vueLogo from '../../assets/images/vueLogo.png'
import goLogo from '../../assets/images/goLogo.png'
import pyLogo from '../../assets/images/pyLogo.png'
import javaLogo from '../../assets/images/javaLogo.png'
import mongodbLogo from '../../assets/images/mongodbLogo.png'
import jsLogo from '../../assets/images/jsLogo.png'
import tsLogo from '../../assets/images/tsLogo.png'
import cLogo from '../../assets/images/cLogo.png'
import sqlLogo from '../../assets/images/sqlLogo.png'
import expressLogo from '../../assets/images/expressJsLogo.png'
import flaskLogo from '../../assets/images/flaskLogo.png'
import jenkinsLogo from '../../assets/images/jenkinsLogo.png'
import './home-page.css';
import { TypeAnimation } from 'react-type-animation';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  // Add function binding here

  render() {
    return (
      <div className="home-page">
        {/* Stage one of the about page */}
        <TypeAnimation className="welcomeText" sequence={['Welcome.', 7000]} speed={25} />
        <div className='aboutMe'>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" >
            <Post post={aboutMePost} />
          </AnimationOnScroll>
        </div>

        {/* Stage two of the about page */}
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" >
          <div className="programmingLanguages">
            <Post post={programmingLanguagesPost}></Post>
            <div className='logos'>
              <a className='sLogoLink' 
              href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={reactLogo} alt="reactLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://angular.io/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={angularLogo} alt="angularLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://vuejs.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={vueLogo} alt="vueLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://go.dev/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={goLogo} alt="goLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.python.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={pyLogo} alt="pyLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.mongodb.com/home" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={mongodbLogo} alt="mongodbLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://docs.oracle.com/en/java/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={javaLogo} alt="javaLogo" />
              </a>
            </div>
            <div className='logos'>
              <a className='sLogoLink' 
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={jsLogo} alt="jsLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://expressjs.com/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={expressLogo} alt="expressLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={tsLogo} alt="tsLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={sqlLogo} alt="sqlLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://learn.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={cLogo} alt="cLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://flask.palletsprojects.com/en/2.2.x/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={flaskLogo} alt="flaskLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://www.jenkins.io/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={jenkinsLogo} alt="jenkinsLogo" />
              </a>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    );
  }
}

export default HomePage;
