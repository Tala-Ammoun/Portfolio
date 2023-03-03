import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./contact.css";

const contactStyle = {
  card: {
    margin: 20,
    background: "#ededeb"
  },
  heading: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    background: "brown",
    minHeight: 50,
    lineHeight: 3,
    fontSize: "1.5rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    float: "left",
    marginLeft: 60,
    marginRight: 200,
    fontFamily: "Times New Roman",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },
  button: {
    marginLeft: 530,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Times New Roman",
    border: "none",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    background: "brown",
    color: "white",
  },
  input:{
    width: 400,
    textAlign: "center",
    padding: 10,
    marginLeft: 400,
	  borderRadius: 5,
    border: "solid #ccc",
	  marginTop: 15,
    marginBottom: 5,
	  fontFamily:"Times New Roman",
	  fontSize:16,
  },
  link:{
    textDecoration: "none",
    color: "black",
    fontFamily:"Times New Roman",
    marginRight: 50,
  }
};

export class Form extends Component {
  state = { 
    fullName: "",
    email: "",
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    let handleOnChange = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        alert(`Please enter a valid email`)
      }
      else {
        this.setState({email: email})
      }
    }

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
    else {alert(`Message Received ${this.state.fullName}!`)}
  

    this.setState({
      fullName: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <div>
          <input style={contactStyle.input}
            value={this.state.FullName}
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="John Doe"
          />
          </div>
          <div>
          <input style={contactStyle.input}
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange} 
            type="email"
            placeholder="johndoe@gmail.com"
          />
          </div>
          <div>
          <textarea style={contactStyle.input}
          placeholder="Message"
          />
          </div>

          <div>
          <button onClick={this.handleFormSubmit} style={contactStyle.button}>Submit</button>
          </div>

        </form>
      </div>
    );
  }
}

export function Contact() {
  return (
    <div style={contactStyle.card}>
      <h1 style={contactStyle.heading}>Contact Me</h1>

      <div>
      <p style={contactStyle.content}>
        Tala Ammoun
      </p>
      <p style={contactStyle.content}>
        Email: talaammoun@gmail.com
      </p>
      </div>

      <div>
      <a href={require("./CV_Tala_Ammoun.pdf")} download style={contactStyle.link}>CV</a>
      <a href="https://github.com/Tala-Ammoun/Portfolio.git" style={contactStyle.link}> GitHub </a>
      <a href="https://www.linkedin.com/in/tala-ammoun-421152163" style={contactStyle.link}> LinkedIn </a>
      </div>
      <Form></Form>
    </div>
  );
}


