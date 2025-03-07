import React , { Component } from 'react';
import './work-experience.css';
import Post from '../../components/post/post';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { TypeAnimation } from 'react-type-animation';
import { endpoints } from '../../models/enums/endpoints.enum';

/**
 * Material Style Settings.
 */
const sxStyle = {
  "& button.Mui-selected": {backgroundColor: 'rgba(4, 12, 33, .14)'},
  "& .MuiTabs-indicator": {display: 'none'}
}

/**
 * Experience Object Init.
 */
const expInit = {"arka": [], "pnc": []};

/**
 * Component for displaying content relevant to work experience.
 */
class WorkExperience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: structuredClone(expInit),
      activeTab: "arka",
    }
    // Add function binding here
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  /**
   * Run after component initializes.
   */
  componentDidMount() {
    fetch(process.env.REACT_APP_SERVER + process.env.REACT_APP_ROOT + endpoints.postWorkContent)
      .then(result => result.json())
      .then((result) => {
        // Get the posts object from state
        let posts = structuredClone(expInit);

        // Initialize the posts object
        for (let post of result) {
          posts[post.company].push(post);
        }

        // Set state
        this.setState({
          posts: posts
        });

        return; 
      })
      .catch((error) => {
        // TODO: Dialog Error Handling
        alert(error);
      })
  }

  /**
   * Handle change in the work experience tab.
   * @param {Event} e 
   * @param {String} tab 
   */
  handleTabChange(e, tab) {
    this.setState({
      activeTab: tab,
    })
  }
  
  /**
   * Render work experience template.
   * @returns {Template}
   */
  render() {
    return (
      <div className="work-experience" data-testid="WorkExperience">
        <div className="workExperienceHook">
          <TypeAnimation className="workExperienceHookText"
          sequence={['Innovation distinguishes between a leader and a follower.', 7000]} speed={45} />
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="experienceSelector">
          <Tabs value={this.state.activeTab} sx={sxStyle} onChange={this.handleTabChange} className="expTabs" fullWidth={true}>
            <Tab label="ARKA" className="tab" value="arka" selected={true} />
            <Tab label="PNC" className="tab" value="pnc" />
          </Tabs>
        </AnimationOnScroll>
        {/* Loop though posts and display then im a fade in animation wrapper */}
        {this.state.posts[this.state.activeTab].map((post, index) => (
        <AnimationOnScroll animateIn="animate__fadeIn" duration="2" className="workPosts pncPost" key={"post" + index} >
          <Post post={post} />
        </AnimationOnScroll>
        ))}
      </div>
    );
  }
}

export default WorkExperience;
