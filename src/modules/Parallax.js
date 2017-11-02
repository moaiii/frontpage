import React, { Component } from 'react';


class Parallax extends Component {

  render() {

    // let img_url = require(`../img/parallax-${this.props.img}.jpg`);

    // let parallaxImg= {
    //   backgroundImage: 'url(' + img_url + ')',
    //   backgroundSize: "cover",
    //   backgroundPosition: ""
    // };

    let seeThrough = {
      backgroundColor: "transparent"
    };

    let scrollAnimate = {
      transform: `translateX(${this.props.percentOut * 100}) !important`
    }

    return (
      <div className="parallax">
        <div className="parallax__container"
             style={seeThrough}>
        </div>  
        <h1 className={`parallax__header ${(this.props.isInView ) ? "animate" : ""}`}
            style={this.props.isInView ? scrollAnimate : null} >
          {this.props.header}
        </h1>
      </div>
    );
  }
}

export default Parallax;
