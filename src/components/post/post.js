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
          {this.props.params.position === 'left' &&
          <div className="photo">
            <img src={this.props.photo} alt="post" />
          </div>
          }
          <div className="text">
            <h1>{this.props.params.header}</h1>
            <p className="paragraph">{this.props.params.message}</p>
          </div>
          {this.props.params.position === 'right' &&
          <div className="photo">
            <img src={this.props.photo} alt="post" />
          </div>
          }
        </div>
      );
    }
}

export default Post;