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
        {/* Stage one of the about page */}
        <div className="welcomeText">Welcome.</div>
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
              <img className='sLogo' src={reactLogo} alt="reactLogo" />
              <img className='sLogo' src={angularLogo} alt="angularLogo" />
              <img className='sLogo' src={vueLogo} alt="vueLogo" />
              <img className='sLogo' src={goLogo} alt="goLogo" />
              <img className='sLogo' src={pyLogo} alt="pyLogo" />
              <img className='sLogo' src={mongodbLogo} alt="mongodbLogo" />
              <img className='sLogo' src={javaLogo} alt="javaLogo" />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    );
  }
}

export default HomePage;
