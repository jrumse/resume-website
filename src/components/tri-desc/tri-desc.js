import React , { Component } from 'react';
import SmallPost from '../../components/small-post/small-post';
import './tri-desc.css';

class TriDesc extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      console.log(this.props)
      return (
        <div className="TriDesc" data-testid="TriDesc">
          <h1 className='triDescHeader'>{ this.props.post.title }</h1>
            <div className="triDescPosts">
              {this.props.post.content.map(function(content, i) {
                return <SmallPost params={content} key={i} ></SmallPost>
              })}
            </div>
        </div>
      );
    }
}

export default TriDesc;