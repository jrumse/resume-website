import React , { Component } from 'react';
import './work-experience.css';
import Post from '../../components/post/post';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { pncPost, rolePost } from '../../models/enums/work.enum';

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
            <div className="workExperienceHookText One">Innovation distinguishes</div>
            <div className="workExperienceHookText Two">between a leader and a follower.</div>
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