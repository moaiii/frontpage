import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaYoutube from 'react-icons/lib/fa/youtube';
import P5Wrapper from 'react-p5-wrapper';

// p5
import spectrum from '../js/spectrum';
// <script src="javascripts/song.js"></script>
// <script src="javascripts/preload.js"></script>
// <script src="javascripts/setup.js"></script>
// <script src="javascripts/sketch.js"></script>

class Footer extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      sketch: spectrum
    };
  };

  componentWillReceiveProps(nextProps) {};

  _handleSocialClick(type) {
    let url = "";

    switch(type) {
      case "twitter":
        url = "https://twitter.com/moaimsc";
        break;
      case "soundcloud":
        url = "https://soundcloud.com/moai_music";
        break;
      case "youtube":
        url = "https://www.youtube.com/user/MrMelvi87";
        break;
      case "instagram":
        url = "https://www.instagram.com/_moaiii/";
        break;
      case "facebook":
        url = "https://www.facebook.com/itsmoai";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/moaiii/";
        break;
      case "github":
        url = "https://www.github.com/moaiii/";
        break;
      default:
        url = "https://www.facebook.com/itsmoai";
    }

    let win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    let img_url = this.props.img !== "blank" ? require(`../img/${this.props.img}.jpg`) : null;
    
    let stickyImage= {
      backgroundImage: 'url(' + img_url + ')',
      backgroundSize: "cover",
      backgroundPosition: "",
      filter: "grayscale()"
    };

    let curtain = this.props.img !== "blank" ?
      <div className="curtain"></div> : null;

    let social = this.props.img === "blank" ?
      <div className="footer__container">
        <div className="footer__social">
          <a href="javascript:;" 
            onClick={() => this._handleSocialClick("github")}>
            <FaGithub />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("facebook")}>
            <FaFacebook />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("twitter")}>
            <FaTwitter />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("instagram")}>
            <FaInstagram />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("soundcloud")}>
            <FaSoundcloud />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("linkedin")}>
            <FaLinkedin />
          </a>
          <a href="javascript:;"
            onClick={() => this._handleSocialClick("youtube")}>
            <FaYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <p>&copy; Christopher Melville</p>
        </div>
      </div> : 
      null;

    return (
      <div className="footer"
           style={stickyImage}>
        {social}
        {curtain}
        <P5Wrapper className="canvas__mandala" sketch={this.state.sketch}/>
      </div>
    );
  }
}

export default Footer;

        
