import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./contact.css";


export function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Tala Ammoun
      </p>
      <p>
        Email: talaammoun@gmail.com
      </p>
      <Link to="/CV_Tala_Ammoun.pdf" target="_blank" download>CV</Link>
      <Route path='/github' component={() => window.location = 'https://github.com/Tala-Ammoun/Portfolio.git'}/>
      <a href="/github"> GitHub </a>
      <Route path='/linkedin' component={() => window.location = 'https://www.linkedin.com/in/tala-ammoun-421152163'}/>
      <a href="/linkedin"> LinkedIn </a>
    </div>
  );
}

export class Form extends Component {
  state = { 
    fullName: "",
    email: "",
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if(!this.state.fullName){
      alert(`Name cannot be left blank`)}
    else if (this.state.email === undefined || this.state.email.length <= 6){ 
      alert(`Please enter a valid email`)}
    else {alert(`Welcome ${this.state.fullName}`)}
  

    this.setState({
      fullName: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <h1>
          Contact me
        </h1>
        <form className="form">
          <input
            value={this.state.FullName}
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="John Doe"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange} 
            type="text"
            placeholder="johndoe@gmail.com"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

