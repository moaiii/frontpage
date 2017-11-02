import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';


class Develop extends Component {
  _handleOutlink(link) {
    let url = link;
    let win = window.open(url, '_blank');
    win.focus();
  };
  
  render() {
    return (
      <div className="develop">
        <div className="develop__container">
          <div className="develop__title">
            <p>Developer</p>
          </div>
          <div className="develop__blurb">
            <p>I work at ambie.fm - a music tech start up where I build a lot of new features including IoT media players.</p>
            <p>I love Javascript and from cloud servers right through to rich reactJS front ends, I build everything with it.</p>
            <p>Below are some examples of my work.</p>
          </div>
          <div className="develop__projects">
            <div className="project"
                 onClick={() => this._handleOutlink("http://ambie.fm")}>
              <div className="project__background">
                <p>ambie.fm</p>          
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://github.com/moaiii")}>
              <div className="project__background">
                <p>guitar.productions</p>          
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://github.com/moaiii")}>
              <div className="project__background">
                <p>www.daw.guitar</p>          
              </div>
            </div>
          </div>
          <div className="develop__outlink" 
               onClick={() => this._handleOutlink("http://github.com/moaiii")}>
            <p>Github</p>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Develop;
