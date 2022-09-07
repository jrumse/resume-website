import React , { Component } from 'react';
import { Divider } from '@mui/material';
import './footer.css';

class Footer extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="Footer" data-testid="Footer">
          <Divider className="divider" />
          <div className="hTitle">
            josh_rumsey_sde
          </div>
          <div className="hContent">
            <div>
              hello
            </div>
            <div>
              hi
            </div>
            <div>
              hello
            </div>
          </div>
        </div>
      );
    }
}

export default Footer;