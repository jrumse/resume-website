import React , { Component } from 'react';
import styles from './work-experience.css';

class WorkExperience extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="work-experience" data-testid="WorkExperience">WorkExperience Component</div>
      );
    }
}

export default WorkExperience;