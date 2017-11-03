import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
// import ReactPlayer from 'react-player';
// var song_1 = require(`../audio/song_1.mp3`);
// var song_2 = require(`../audio/song_2.mp3`);
// var song_3 = require(`../audio/song_3.mp3`);
// var song_4 = require(`../audio/song_4.mp3`);

class Music extends Component {

  constructor() {
    super();

    this.state = {
      playing: false,
      // song: null,
      // nowPlayingTitle: "",
      // song_1_isPlaying: "",
      // song_2_isPlaying: "",
      // song_3_isPlaying: "",
      // song_4_isPlaying: "",
    };
  }

  _handleOutlink(url) {
    let win = window.open(url, '_blank');
    win.focus();
  };

  // _handleToggleMusic(id, song, title) {
  //   this.setState({
  //     song: song,
  //     playing: !this.state.playing,
  //     nowPlayingTitle: title,
  //     [`song_${id}_isPlaying`]: "isPlaying"
  //   }, () => console.log(this.state))
  // }

  render() {
    // const {playing, song} = this.state;

    return (
      <div className="music">
        <div className="music__container">
          
        <div className="music__title">
            <p>Music</p>
          </div>

          <div className="music__content">
            <p className="music__text">
              Check out my music using the links below.
            </p>
            <p className="music__text">
              Made with love using Ableton, Max, various toys and beat machines. 
            </p>
            <div className="project"
                 onClick={() => this._handleOutlink("http://soundcloud.com/moai_music")}>
              <div className="project__background">
                <p>Music</p>          
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("https://www.youtube.com/watch?v=kGuu_3fn_B0")}>
              <div className="project__background">
                <p>Video</p>          
              </div>
            </div>
          </div>

          <div className="music__outlink" 
               onClick={() => this._handleOutlink("https://www.youtube.com/user/MrMelvi87")}>
            <p>youtube</p>
            <div>
              <FaChevronRight />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Music;
