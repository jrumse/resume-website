import React , { Component } from 'react';
import PicDesc from '../pic-desc/pic-desc';
import TriDesc from '../tri-desc/tri-desc';
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
          {/* Render Pic Description */}
          {this.props.post.type === 'pic-desc' &&
          <PicDesc params={this.props.post.content[0]} ></PicDesc>}
          {/* Render Tri Description */}
          {this.props.post.type === 'tri-desc' &&
          <TriDesc post={this.props.post} ></TriDesc>
          }
        </div>
      );
    }
}

export default Post;