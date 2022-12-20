import React , { Component } from 'react';
import './contact.css';
import { TypeAnimation } from 'react-type-animation';

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
          <TypeAnimation className="contactHookText" sequence={['Lets get in contact.', 7000]} speed={25} />
          </div>
        </div>
      );
    }
}

export default Contact;