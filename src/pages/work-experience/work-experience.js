import React , { Component } from 'react';
import './work-experience.css';
import Post from '../../components/post/post';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { TypeAnimation } from 'react-type-animation';
import { endpoints } from '../../models/enums/endpoints.enum';

class WorkExperience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    // Add function binding here
  }

  // Component Did Mount
  componentDidMount() {
    fetch(process.env.REACT_APP_SERVER + process.env.REACT_APP_ROOT + endpoints.postWorkContent)
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
      <div className="work-experience" data-testid="WorkExperience">
        <div className="workExperienceHook">
          <TypeAnimation className="workExperienceHookText"
          sequence={['Innovation distinguishes between a leader and a follower.', 7000]} speed={45} />
        </div>
        {/* Loop though posts and display then im a fade in animation wrapper */}
        {this.state.posts.map(post => (
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="workPosts pncPost" >
          <Post post={post} />
        </AnimationOnScroll>
        ))}
      </div>
    );
  }
}

export default WorkExperience;