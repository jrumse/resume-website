import React , { Component } from 'react';
import './work-experience.css';
import Post from '../../components/post/post';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { pncPost, rolePost } from '../../models/enums/work.enum';
import { TypeAnimation } from 'react-type-animation';

class WorkExperience extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="work-experience" data-testid="WorkExperience">
          <div className="workExperienceHook">
            <TypeAnimation className="workExperienceHookText"
            sequence={['Innovation distinguishes between a leader and a follower.', 7000]} speed={45} />
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="workPosts pncPost" >
            <Post post={pncPost} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="workPosts pncPost" >
            <Post post={rolePost} />
          </AnimationOnScroll>
        </div>
      );
    }
}

export default WorkExperience;