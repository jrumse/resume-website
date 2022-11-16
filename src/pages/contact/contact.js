import React , { Component } from 'react';
import './contact.css';

class Contact extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="contact" data-testid="Contact">
          <div className="contactHook">
            <div className="contactHookText">Lets get in contact.</div>
          </div>
        </div>
      );
    }
}

export default Contact;