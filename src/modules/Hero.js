import React, { Component } from 'react';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';


class Hero extends Component {
  render() {

    let video_url_mp4 = require(`../video/hero-video-short.mp4`);
    let audio_url = require(`../audio/website-audio.mp3`);

    return (
      <div className="hero">
        <div className="hero-video__container">
          <div className="curtain"></div>
          <video playsinline 
                 width="auto" 
                 height="100%" 
                 min-height="100%" 
                 autoPlay="true" 
                 loop
                 muted>
            <source src={video_url_mp4} type="video/mp4" />
          </video>
          <audio src={audio_url} autoPlay loop></audio>
        </div>
        <div className="hero__container">
          <div className="hero__title">
            <p>Moai /ˈmoʊ.aI/</p>
          </div>
          <div className="hero__content">
            <p>a creative developer,</p>
            <p>programmer</p>
            <p>& musician</p>
          </div>
          <div className="hero__outlink --hero">
            <div>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;



// <audio controls autoPlay="true" loop>
//  <source src={audio_url} type="audio/mp3" />
// </audio>