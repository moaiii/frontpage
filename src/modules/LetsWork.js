import React, { Component } from 'react';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
import axios from 'axios';

class LetsWork extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
      formIsVisible: true
    };
  }

  _sendEmail(state) {
    let endpoint = "https://phl9zip8a4.execute-api.eu-west-1.amazonaws.com/v0/contact";

    axios.post(endpoint, {
      name: state.name,
      email: state.email,
      message: state.message
    
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.setState({
        formIsVisible: false
      
      }, () => {
        console.log(response);
      })

    }).catch(error => {
      console.log(error);
    });
  }

  _handleInput(e) {
    let field = e.currentTarget.placeholder;
    let value = e.currentTarget.value;

    this.setState({
      [field]: value
    });
  }

  render() {

    let formText = this.state.formIsVisible ? 
      <p>If you have a project that you need taken care of then write me a message below or send an email and lets talk!</p> : 
      <p>Thank you for your message! I'll get back to you within 24 hours :)</p>

    return (
      <div className="letswork">
        <div className="letswork__container">
          <div className="letswork__title">
            <p>Lets work together</p>
          </div>
          <div className="letswork__content">
            {formText}
          </div>
          <div className={`letswork__message-box ${!this.state.formIsVisible ? "hide" : ""}`}>
            <input type="text" 
                   placeholder="name" 
                   className="input-name"
                   onInput={this._handleInput.bind(this)}/>
            <input type="email" 
                   placeholder="email" 
                   className="input-email"
                   onInput={this._handleInput.bind(this)}/>
            <input type="text"
                   placeholder="message" 
                   className="input-message"
                   onInput={this._handleInput.bind(this)}/>
            <button onClick={() => this._sendEmail(this.state)}>
              Send
            </button>
          </div>
          <div className="letswork__outlink" onClick={this._handleEmailClick}>
            <p>I'd rather email</p>
            <div>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsWork;
