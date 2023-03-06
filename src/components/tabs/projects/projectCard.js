import React from "react";
import projects from './projects.json';

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={require(`${props.image}`)} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Skills:</strong> {props.skills}
          </li>
          <li>
            <strong>Link:</strong> <a href={props.link}>{props.name}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
