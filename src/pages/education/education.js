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
        <div className="education" data-testid="Education">
          <div className="educationHookText One">One of the oldest and most</div>
          <div className="educationHookText Two">respected programs in computation.</div>
        </div>
        // University of Michigan Computer Science Summary
        // Kalamazoo Valley Community College Summary
        // Notable College Projects
        // 1. Ski Locale
        // 2. Assignment Collector
        // 3. insta485
        // https://cse.engin.umich.edu/academics/undergraduate/computer-science-lsa/
      );
    }
}

export default Education;