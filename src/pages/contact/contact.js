import React , { Component } from 'react';
import styles from './contact.css';

class Contact extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className={styles.Contact} data-testid="Contact">Contact Component</div>
      );
    }
}

export default Contact;