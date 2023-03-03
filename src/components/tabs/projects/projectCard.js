import React from "react";
import "./project.css";

function projectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
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
        </ul>
      </div>
      <span className="remove" onClick={() => removeProject}>𝘅</span>
    </div>
  );
}

export default FriendCard;
