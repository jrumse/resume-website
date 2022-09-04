import React , { Component } from 'react';
import './education.css';

class Education extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="education" data-testid="Education">Education Component</div>
      );
    }
}

export default Education;