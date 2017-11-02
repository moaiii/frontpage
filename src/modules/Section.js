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
            <p>About Me</p>
          </div>
          <div className="section__content">
            <p>
              Tumblr plaid copper mug letterpress lomo. Flannel craft beer everyday carry green juice selvage kitsch. Meditation fixie heirloom chambray tilde, gentrify squid pour-over affogato palo santo pitchfork adaptogen DIY meggings scenester. Mixtape affogato 90's, taxidermy helvetica snackwave subway tile waistcoat man braid celiac green juice beard.
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
