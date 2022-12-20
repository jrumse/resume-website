import React , { Component } from 'react';
import Post from '../../components/post/post';
import { bachelorsPost, courseStudyPost, notableProjectsPost } from '../../models/enums/education.enum';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import eecsLogoLong from '../../assets/images/EECS-acronym-white.png'
import './education.css';
import { TypeAnimation } from 'react-type-animation';

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
            <TypeAnimation className="educationHookText"
            sequence={['One of the oldest and most respected programs in computation.', 7000]} speed={45} />
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts bachelorsPost" >
            <Post post={bachelorsPost} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts courseStudyPost" >
            <Post post={courseStudyPost} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts notableProjectsPost">
            <Post post={notableProjectsPost}></Post>
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