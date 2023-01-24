import React , { Component } from 'react';
import Post from '../../components/post/post';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import eecsLogoLong from '../../assets/images/EECS-acronym-white.png'
import './education.css';
import { TypeAnimation } from 'react-type-animation';

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    // Add function binding here
  }

  // Component Did Mount
  componentDidMount() {
    fetch(process.env.REACT_APP_SERVER + process.env.REACT_APP_ROOT + '/post/education?content=true')
      .then(result => result.json())
      .then((result) => {
        this.setState({
          posts: result
        })
        return result; 
      })
      .catch((error) => {
        // TODO: Dialog Error Handling
        alert(error);
      })
  }

  render() {
    return (
      <div className="education" data-testid="Education">
        <div className="educationHook">
          <TypeAnimation className="educationHookText"
          sequence={['One of the oldest and most respected programs in computation.', 7000]} speed={45} />
        </div>
        {/* Loop though posts and display then im a fade in animation wrapper */}
        {this.state.posts.map((post, index) => (
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="eduPosts bachelorsPost" >
          <Post post={post} />
          {/* If Last post in the list, display Michigan EECS Logo and Link */}
          {index === this.state.posts.length - 1 &&
          <div className="eecsLogoLong">
            <a href="https://cse.engin.umich.edu/academics/undergraduate/computer-science-lsa/" 
            target="_blank" rel="noreferrer noopener">
              <img className="eecsLogoPng" src={eecsLogoLong} alt="eecslogolong" />
            </a>
          </div>}
        </AnimationOnScroll>
        ))}
      </div>
    );
  }
}

export default Education;