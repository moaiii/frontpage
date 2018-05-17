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
            <p>I work all over the stack, from UI to Dev ops.</p>
            <p>Javascript, React, Redux, Node, SASS and AWS are my tools of choice.</p>
          </div>
          <div className="develop__projects">
            <div className="project"
                 onClick={() => this._handleOutlink("https://goo.gl/5k6ij8")}>
              <p>Frets 2 Keys</p>    
              <div className="project__background">
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("https://goo.gl/JgoE4p")}>
              <p>Go Compare</p>
              <div className="project__background">
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://undiscovered-japan.ft.com/")}>
              <p>Nikkei</p>          
              <div className="project__background">
              </div>
            </div>
            <div className="project"
                 onClick={() => this._handleOutlink("http://telecomsconnect.withgoogle.com")}>
              <p>Google</p>          
              <div className="project__background">
              </div>
            </div>
          </div>
          <div className="develop__outlink" 
               onClick={() => this._handleOutlink("https://goo.gl/G6nwkT")}>
            <p>Github</p>
            <div>
              <FaChevronRight />
            </div>
          </div>
          <div className="develop__outlink" 
               onClick={() => this._handleOutlink("https://goo.gl/syU6AW")}>
            <p>CV</p>
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
