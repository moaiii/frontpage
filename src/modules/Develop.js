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
            <p>From designs to the server - I get stuck into all of it.</p>
            <p>Javascript, React, Node, SASS and AWS are my tools of choice.</p>
          </div>
          <div className="develop__projects">
            <div className="project"
                 onClick={() => this._handleOutlink("http://frets2keys.com")}>
              <div className="project__background">
                <p>frets2keys.com</p>          
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://undiscovered-japan.ft.com/")}>
              <div className="project__background">
                <p>Nikkei</p>          
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://telecomsconnect.withgoogle.com")}>
              <div className="project__background">
                <p>Google</p>          
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
