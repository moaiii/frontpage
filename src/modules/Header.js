import React, { Component } from 'react';
import rsScroller from 'react-smooth-scroller';


class Header extends Component {

  _scrollToSection(e) {
    let class_name = e.currentTarget.getAttribute('data-link');
    rsScroller.scrollToTarget(class_name + "__container", 
      { easing: 'ease', duration: 500 });
  }

  _scrollToTop(e) {
    rsScroller.scrollToTop();
  }

  render() {
    return (
      <div className="header">
        <div className="App__header">
          <div className="icon">
          </div>
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__list-item"
                  data-link="hero"
                  onClick={this._scrollToSection.bind(this)}>
                Home
              </li>
              <li className="nav__list-item"
                  data-link="section"
                  onClick={this._scrollToSection.bind(this)}>
                About
              </li>
              <li className="nav__list-item"
                  data-link="develop"
                  onClick={this._scrollToSection.bind(this)}>
                Develop
              </li>
              <li className="nav__list-item"
                  data-link="music"
                  onClick={this._scrollToSection.bind(this)}>
                Music
              </li>
              <li className="nav__list-item"
                  data-link="letswork"
                  onClick={this._scrollToSection.bind(this)}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
