import React , { Component } from 'react';
import './contact.css';
import { TypeAnimation } from 'react-type-animation';
import ContactForm from '../../components/forms/contact-form/contact-form';
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
            <TypeAnimation className="contactHookText" sequence={["Let's get in touch!!!", 7000]} speed={25} />
          </div>
          <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="cForm">
            <ContactForm />
          </AnimationOnScroll>
        </div>
      );
    }
}

export default Contact;