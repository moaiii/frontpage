import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
import ReactPlayer from 'react-player';
// var song_1 = require(`../audio/song_1.mp3`);
// var song_2 = require(`../audio/song_2.mp3`);
// var song_3 = require(`../audio/song_3.mp3`);
// var song_4 = require(`../audio/song_4.mp3`);

class Music extends Component {

  constructor() {
    super();

    this.state = {
      playing: false,
      song: null,
      nowPlayingTitle: "",
      song_1_isPlaying: "",
      song_2_isPlaying: "",
      song_3_isPlaying: "",
      song_4_isPlaying: "",
    };
  }

  _handleOutlink() {
    let url = "http://soundcloud.com/moai_music";
    let win = window.open(url, '_blank');
    win.focus();
  };

  _handleToggleMusic(id, song, title) {
    this.setState({
      song: song,
      playing: !this.state.playing,
      nowPlayingTitle: title,
      [`song_${id}_isPlaying`]: "isPlaying"
    }, () => console.log(this.state))
  }

  render() {
    const {playing, song} = this.state;

    return (
      <div className="music">
        <div className="music__container">
          <div className="music__title">
            <p>{this.state.playing ? 
                "Now Playing " + this.state.nowPlayingTitle : "Music"}
            </p>
          </div>
          <div className="music__content">
            <div className="song__column">
              <div className={`song__container song_1 ${this.state.playing ? this.state.song_1_isPlaying : " "}`}
                  //  onClick={() => this._handleToggleMusic(1, song_1, "Lisboa")}
                   >
                <p>Lisboa</p>
              </div>
              <div className={`song__container song_2 ${this.state.playing ? this.state.song_2_isPlaying : " "}`}
                  //  onClick={() => this._handleToggleMusic(2, song_4, "Vovka")}
                   >
                <p>Vovka</p>
              </div>            
            </div>
            <div className="song__column">
              <div className={`song__container song_3 ${this.state.playing ? this.state.song_3_isPlaying : " "}`}
                  //  onClick={() => this._handleToggleMusic(3, song_3, "Reckoner")}
                   >
                <p>Reckoner</p>
              </div>      
              <div className={`song__container song_4 ${this.state.playing ? this.state.song_4_isPlaying : " "}`}
                  //  onClick={() => this._handleToggleMusic(4, song_2, "Rojo")}
                   >
                <p>Rojo</p>
              </div>            
            </div>
          </div>
          <div className="music__outlink" onClick={this._handleOutlink}>
            <p>Soundcloud</p>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <ReactPlayer
          ref={player => { this.player = player }}
          className='audio-player'
          width='100%'
          height='100%'
          url={song}
          playing={playing}
          volume={1}
          // onPlay={this._playing.bind(this)}
          // onPause={this._paused.bind(this)}
          />
      </div>
    );
  }
}

export default Music;
