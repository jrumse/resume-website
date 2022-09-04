import { Component } from 'react';
import styles from './TemplateName.css';

class TemplateName extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className={styles.TemplateName} data-testid="TemplateName">TemplateName Component</div>
      );
    }
}

export default TemplateName;