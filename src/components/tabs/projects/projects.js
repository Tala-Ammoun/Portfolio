import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./projects.css";
import projects from './projects.json';
import Wrapper from "./wrapper";
import ProjectCard from './projectCard';

const projectStyle = {
  card: {
    margin: 20,
    background: "#ededeb"
  },
  heading: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    background: "brown",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    fontFamily: "Times New Roman",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },
  content2: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    paddingTop: 5,
  },
  image: {
    height: 300,
    width: 200,
  },
  button: {
    fontFamily: "Times New Roman",
    border: "none",
    borderRadius: 10,
    padding: 10,
    background: "brown",
    color: "white",
    marginLeft: 556,
    marginBottom: 20,
  }
  
};

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      projects: projects
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.isToggleOn)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <div style={projectStyle.card}>
          <h1 style={projectStyle.heading}>Projects</h1>
          <p style={projectStyle.content2}>
            Welcome to my portfolio!
          </p>
          <p style={projectStyle.content}>
            I am a Front-End Software Developer with 9 months of experience in
            HTML, CSS, Javascript, APIs, Node, and React.
            Throughout my journey, I have had the privilege of working on a range of diverse projects,
            each presenting unique challenges and opportunities for growth.
            In this portfolio, you will find a selection of my best work, showcasing my skills and expertise in front-end software development.
            Thank you for taking the time to explore my portfolio, and I look forward to the opportunity to work with you!
          </p>

          <div>
            <button style={projectStyle.button} onClick={this.handleClick}>
              View Projects
            </button>
          </div>
        </div>
        {this.state.isToggleOn ?
        <Wrapper style={{display:"flex"}}>
          {this.state.projects.map(project => {
            return (
              <ProjectCard
                key={project.id} 
                name={project.name}
                image={project.image}
                description={project.description}
                skills={project.skills}
                link={project.link}
              />)
          }
          )
          }
        </Wrapper>
        : ""}
      </div>
    );
  }
}




