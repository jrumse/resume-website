import React , { Component } from 'react';
import Headshot from '../../assets/images/professionalpic.jpg'
import './post.css';

class Post extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="Post" data-testid="Post">
          <div className="text">
            <h1>About me</h1>
            <p className="paragraph">I am a software developer and engineer from Kalamazoo, Michigan.
              I spent two years at Kalamazoo Valley Community College pursuing an Associates in Applied Mathematics, before 
              transferring to the University of Michigan in Ann Arbor to complete a Bachelors in Computer Science. I am 
              currently a Full Stack Software Developer and Application Technical Lead for PNC Financial Services.</p>
          </div>
          <img className="photo" src={Headshot} alt="headshot" />
        </div>
      );
    }
}

export default Post;