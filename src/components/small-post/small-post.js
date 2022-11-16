import React , { Component } from 'react';
import './small-post.css';

class SmallPost extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      console.log(this.props)
      return (
        <div className="SmallPost" data-testid="SmallPost">
          <h2 className="spHeader">{this.props.params.header}</h2>
          <p>
            {this.props.params.message}
          </p>
        </div>
      );
    }
}

export default SmallPost;