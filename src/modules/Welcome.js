import React, { Component } from 'react';
import hero from '../img/welcome-hero.jpg';

class Welcome extends Component {
  render() {
    return (
      <div className="module__container">
        <img src={hero} className="module__hero-image" alt=""/>
        <p className="module__copy">
          Tumblr plaid copper mug letterpress lomo. Flannel craft beer everyday carry green juice selvage kitsch. Meditation fixie heirloom chambray tilde, gentrify squid pour-over affogato palo santo pitchfork adaptogen DIY meggings scenester. Mixtape affogato 90's, taxidermy helvetica snackwave subway tile waistcoat man braid celiac green juice beard. Microdosing farm-to-table kombucha vegan vinyl bitters ethical. Skateboard four dollar toast food truck ramps cloud bread. Mixtape quinoa pug vexillologist stumptown banh mi flexitarian iPhone. Butcher hexagon church-key authentic, typewriter woke before they sold out slow-carb chicharrones. PBR&B meh jianbing sartorial knausgaard. 8-bit cray put a bird on it locavore. Shabby chic banjo cred, la croix franzen coloring book sartorial brooklyn fanny pack snackwave kale chips everyday carry plaid. Ethical 3 wolf moon cred, live-edge unicorn selfies vape everyday carry. YOLO thundercats tumeric, kinfolk biodiesel brunch fanny pack selvage salvia hashtag green juice hoodie blog vinyl. PBR&B cloud bread godard sartorial, subway tile tote bag williamsburg viral affogato aesthetic pork belly kale chips four loko tilde.
        </p>
      </div>
    );
  }
}

export default Welcome;
