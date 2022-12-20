import React , { Component } from 'react';
import { Card, CardContent } from '@mui/material';
import './small-post.css';

class SmallPost extends Component {

    constructor(props) {
      super(props);
      this.state = {}
      // Add function binding here
    }
  
    render() {
      return (
        <div className="SmallPost" data-testid="SmallPost">
          <h2 className="spHeader">{this.props.params.header}</h2>
          <Card className="sCard" elevation={0}>
            <CardContent>
              <p>
                {this.props.params.message}
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }
}

export default SmallPost;