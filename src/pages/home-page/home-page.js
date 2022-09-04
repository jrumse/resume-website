import React , { Component } from 'react';
import Post from '../../components/post/post';
import './home-page.css';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  // Add function binding here

  render() {
    return (
      <div className="home-page">
        <div className="welcomeText">Welcome.</div>
        <Post />
      </div>
    );
  }
}

export default HomePage;
