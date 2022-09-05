import React , { Component } from 'react';
import { uiParams, apiParams, dbParams, aboutMeParams } from '../../models/enums/homepage.enum'
import Headshot from '../../assets/images/professionalpic.jpg'
import Post from '../../components/post/post';
import SmallPost from '../../components/small-post/small-post';
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
          <Post params={aboutMeParams} photo={Headshot} />
        </div>

        {/* Stage two of the about page */}
        <div className="programmingLanguages">
          <h1 className='plHeader'>Programming Languages</h1>
          <div className="plPosts">
            <SmallPost params={uiParams} />
            <SmallPost params={apiParams} />
            <SmallPost params={dbParams} />
          </div>
          <div className='logos'>
            <img className='sLogo' src={reactLogo} alt="reactLogo" />
            <img className='sLogo' src={angularLogo} alt="angularLogo" />
            <img className='sLogo' src={vueLogo} alt="vueLogo" />
            <img className='sLogo' src={goLogo} alt="goLogo" />
            <img className='sLogo' src={pyLogo} alt="pyLogo" />
            <img className='sLogo' src={javaLogo} alt="javaLogo" />
            <img className='sLogo' src={mongodbLogo} alt="mongodbLogo" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
