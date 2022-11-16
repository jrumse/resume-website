import React , { Component } from 'react';
import './pic-desc.css';

class PicDesc extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="PicDesc" data-testid="PicDesc">
          {this.props.params.position === 'left' &&
          <div className="photo">
            <img src={require(`../../assets/images/${this.props.params.photo}`)} alt="post" />
          </div>
          }
          <div className="text">
            <h1>{this.props.params.header}</h1>
            <p className="paragraph">{this.props.params.message}</p>
          </div>
          {this.props.params.position === 'right' &&
          <div className="photo">
            <img src={require(`../../assets/images/${this.props.params.photo}`)} alt="post" />
          </div>
          }
        </div>
      );
    }
}

export default PicDesc;