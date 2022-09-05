import React , { Component } from 'react';
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
            <h1>{this.props.params.header}</h1>
            <p className="paragraph">{this.props.params.message}</p>
          </div>
          <img className="photo" src={this.props.photo} alt="headshot" />
        </div>
      );
    }
}

export default Post;