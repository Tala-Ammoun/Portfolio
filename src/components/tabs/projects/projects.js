import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./projects.css";
import projects from './projects.json';
import Wrapper from "./wrapper";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = projects;
  }

  render(){
      return (
        <Wrapper>
          <h1>Project List</h1>
          {this.state.projects.map (project => {
            return (
            <projectCard
            key={projects.id} //"key" is generally added for maps
            name={projects.name}
            image={projects.image}
            description={projects.description}
            skills={projects.skills}
          />)
    })}
        </Wrapper>
      );
    }
  }

export function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
      "Welcome to my portfolio! I am a Front-End Software Developer with 9 months of experience in
       HTML, CSS, Javascript, APIs, Node, and React. 
      Throughout my journey, I have had the privilege of working on a range of diverse projects, 
      each presenting unique challenges and opportunities for growth. 
      In this portfolio, you will find a selection of my best work, showcasing my skills and expertise in front-end software development. 
      My goal is to provide exceptional quality and exceed expectations in every project that I undertake. 
      I take pride in my ability to understand business needs, work collaboratively, and deliver results that drive success. 
      I am passionate about coding and I am always looking for new challenges and opportunities to learn and grow. 
      Thank you for taking the time to explore my portfolio, and I look forward to the opportunity to work with you!"
      </p>
      <Routes>
        <Route path="project" element={<project />} />
      </Routes>
    </div>
  );
}

