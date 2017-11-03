import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';


class Section extends Component {
  _handleOutlink() {
    let url = "https://www.instagram.com/_moaiii/";
    let win = window.open(url, '_blank');
    win.focus();
  };

  render() {
    return (
      <div className="section">
        <div className="section__container">
          <div className="section__title">
            <p>About</p>
          </div>
          <div className="section__content">
            <p>
              I'm a web developer and music producer from Glasgow, Scotland currently residing in big 'ol London. 
            </p>
          </div>
          <div className="section__outlink" onClick={this._handleOutlink}>
            <p>Instagram</p>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
