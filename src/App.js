import React, { Component } from 'react';
// import icon from './img/icon.png';
import Footer from './modules/Footer';
import Header from './modules/Header';
import Section from './modules/Section';
import Develop from './modules/Develop';
import Music from './modules/Music';
import Hero from './modules/Hero';
import LetsWork from './modules/LetsWork';
import Parallax from './modules/Parallax';
var _ = require('lodash');


class App extends Component {

  constructor() {
    super();

    this.state = {
      section_0: true,
      section_1: false,
      section_2: false,
      section_3: false,
      section_4: false,
      section_5: false,
      section_6: false,
      section_7: false,
      section_8: false,
      section_9: false,
      percentIn: 0,
      percentOut: 0,
      img: "moaiii-music"
    };
  }

  componentWillMount() {
    this._addScrollListener();
  };

  _addScrollListener() {
    var throttled = _.throttle(this._whatsInView.bind(this), 100, { 'trailing': false });
    window.addEventListener('scroll', throttled);
  };

  _whatsInView() {
    let docTop_to_scrollTop = document.documentElement.scrollTop;
    let docTop_to_scrollBottom = docTop_to_scrollTop + window.innerHeight;
    let sectionInFull = Math.floor(docTop_to_scrollBottom / window.innerHeight);
    
    let windowView = {
      sectionEntering: Math.ceil(docTop_to_scrollBottom / window.innerHeight) -1,
      sectionInFull: sectionInFull,
      percentageOut: (docTop_to_scrollTop / window.innerHeight) / sectionInFull,
      percentageIn: (1 - (docTop_to_scrollTop / window.innerHeight)) / sectionInFull
    };
    
    console.log(windowView.sectionInFull);
    
    this.setState({
      percentIn: windowView.percentageIn,
      percentOut: windowView.percentageOut
    });

    // console.log(this.state);

    switch(windowView.sectionInFull) {
      case 0:
        this.setState({
          section_0: true,
          img: "parallax-about"
        });
        break;
      case 1:
        this.setState({
          section_1: true,
          img: "parallax-about"
        });
        break;
      case 2:
        this.setState({
          section_2: true,
          img: "parallax-about"
        });
        break;
      case 3:
        this.setState({
          section_3: true,
          img: "moaiii-web"
        });
        break;
      case 4:
        this.setState({
          section_4: true,
          img: "moaiii-web"
        });
        break;
      case 5:
        this.setState({
          section_5: true,
          img: "moaiii-music"
        });
        break;
      case 6:
        this.setState({
          section_6: true,
          img: "moaiii-music"
        });
        break;
      case 7:
        this.setState({
          section_7: true,
          img: "moaiii-contact"
        });
        break;
      case 8:
        this.setState({
          section_8: true,
          img: "moaiii-contact"
        });
        break;
      case 9:
        this.setState({
          section_9: true,
          img: "blank"
        });
        break;
      default:
        
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App__container">
          <Header 
            isInView={this.state.section_0}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Hero 
            isInView={this.state.section_1}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Parallax 
            header={"Hey! Im chris.."} 
            isInView={this.state.section_2}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Section 
            isInView={this.state.section_3}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Parallax 
            header={"I make web stuff.."} 
            isInView={this.state.section_4}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Develop 
            isInView={this.state.section_5}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Parallax 
            header={"..and write music"} 
            isInView={this.state.section_6}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Music 
            isInView={this.state.section_7}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <Parallax 
            header={"contact me"} 
            isInView={this.state.section_8}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <LetsWork 
            isInView={this.state.section_9}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
          <div className="footer-dummy"></div>
          <Footer 
            img={this.state.img}
            isInView={this.state.section_10}
            percentIn={this.state.percentIn}
            percentOut={this.state.percentOut}
          />
        </div>
      </div>
    );
  }
}

export default App;
