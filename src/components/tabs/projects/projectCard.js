import React from "react";
import projects from './projects.json';
const projectCardStyle = {
  card:{
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    borderLeft: "solid black",
    borderBottom: "solid black",
  },
  content: {
    fontFamily: "Times New Roman",
  },
  image: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 280,
    width: 450,
  },
  list: {
    listStyleType: "none",
  }
};

function ProjectCard(props) {
  return (
    <div className="col-6 content" style={{display:"inline-block"}}>
      <div style={projectCardStyle.card}>
        <img alt={props.name} src={require(`${props.image}`)} style={projectCardStyle.image} />
        <ul style={projectCardStyle.list}>
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
