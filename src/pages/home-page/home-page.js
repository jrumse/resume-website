import React , { Component } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Post from '../../components/post/post';
import reactLogo from '../../assets/images/reactLogo.png'
import angularLogo from '../../assets/images/angular-logo.png'
import vueLogo from '../../assets/images/vueLogo.png'
import goLogo from '../../assets/images/goLogo.png'
import pyLogo from '../../assets/images/pyLogo.png'
import javaLogo from '../../assets/images/javaLogo.png'
import mongodbLogo from '../../assets/images/mongodbLogo.png'
import solidjsLogo from '../../assets/images/solidjslogo.svg'
import tsLogo from '../../assets/images/tsLogo.png'
import cLogo from '../../assets/images/cLogo.png'
import postgresLogo from '../../assets/images/postgreslogo.png'
import expressLogo from '../../assets/images/expressJsLogo.png'
import dockerLogo from '../../assets/images/dockerlogo.png'
import jenkinsLogo from '../../assets/images/jenkinsLogo.png'
import './home-page.css';
import { TypeAnimation } from 'react-type-animation';
import { endpoints } from '../../models/enums/endpoints.enum';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    // Add function binding here
  }

  // Component Did Mount
  componentDidMount() {
    fetch(process.env.REACT_APP_SERVER + process.env.REACT_APP_ROOT + endpoints.postAboutContent)
      .then(result => result.json())
      .then((result) => {
        this.setState({
          posts: result
        })
        return result; 
      })
      .catch((error) => {
        // TODO: Dialog Error Handling
        alert(error);
      })
  }

  render() {
    return (
      <div className="home-page">
        {/* Stage one of the about page */}
        <TypeAnimation className="welcomeText" sequence={['Welcome.', 7000]} speed={25} />
        {/* Loop though posts and display then im a fade in animation wrapper */}
        {this.state.posts.map((post, index) => (
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="post" key={"post" + index} >
          <Post post={post} />
          {/* If Last post in the list, display double skill carousel */}
          {index === this.state.posts.length - 1 &&
          <div className="logosContainer">
            {/* Carousel Row 1 */}
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
              <a className='sLogoLink javaLinkRow1' 
              href="https://docs.oracle.com/en/java/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={javaLogo} alt="javaLogo" />
              </a>
            </div>
            {/* Carousel Row 2 */}
            <div className='logos'>
              <a className='sLogoLink' 
                href="https://www.solidjs.com/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={solidjsLogo} alt="solidjsLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={tsLogo} alt="tsLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://expressjs.com/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={expressLogo} alt="expressLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.postgresql.org/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={postgresLogo} alt="postgresLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://learn.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={cLogo} alt="cLogo" />
              </a>
              <a className='sLogoLink' 
              href="https://www.docker.com/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={dockerLogo} alt="dockerLogo" />
              </a>
              <a className='sLogoLink' 
                href="https://www.jenkins.io/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={jenkinsLogo} alt="jenkinsLogo" />
              </a>
              <a className='sLogoLink javaLinkRow2' 
              href="https://docs.oracle.com/en/java/" target="_blank" rel="noreferrer noopener">
                <img className='sLogo' src={javaLogo} alt="javaLogo" />
              </a>
            </div>
          </div>}
        </AnimationOnScroll>
        ))}
      </div>
    );
  }
}

export default HomePage;
