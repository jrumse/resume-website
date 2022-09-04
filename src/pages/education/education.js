import React , { Component } from 'react';
import styles from './education.css';

class Education extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className={styles.Education} data-testid="Education">Education Component</div>
      );
    }
}

export default Education;