import React , { Component } from 'react';
import Post from '../../components/post/post';
import SmallPost from '../../components/small-post/small-post';
import { assignmentCollector, bachelorsPost, courseStudyPost, insta485, skiLocale } from '../../models/enums/education.enum';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import eecsLogoLong from '../../assets/images/EECS-acronym-white.png'
import './education.css';

class Education extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
    render() {
      return (
        <div className="education" data-testid="Education">
          <div className="educationHook">
            <div className="educationHookText One">One of the oldest and most</div>
            <div className="educationHookText Two">respected programs in computation.</div>
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts bachelorsPost" >
            <Post post={bachelorsPost} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts courseStudyPost" >
            <Post post={courseStudyPost} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts notableProjectsPost">
            <h1 className='plHeader'>Notable Projects</h1>
            <div className="plPosts">
              <SmallPost params={skiLocale} />
              <SmallPost params={assignmentCollector} />
              <SmallPost params={insta485} />
            </div>
            <div className="eecsLogoLong">
              <a href="https://cse.engin.umich.edu/academics/undergraduate/computer-science-lsa/" 
              target="_blank" rel="noreferrer noopener">
                <img className="eecsLogoPng" src={eecsLogoLong} alt="eecslogolong" />
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      );
    }
}

export default Education;