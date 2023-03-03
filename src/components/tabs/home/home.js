import React from "react";
import "./home.css";

const homeStyle = {
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
    paddingTop: 10,
  },
  image: {
    height: 300,
    width:200,
    marginLeft: 520,
  },
};


function Home() {
  return (
    <div style={homeStyle.card}>
      <h1 style={homeStyle.heading}>Tala Ammoun</h1>
      <img className="profile-photo" src={require("./photo.jpg")} alt={"me"} style={homeStyle.image}/>
      <p style={homeStyle.content2}> HTML || CSS || Javascript || Jquery || Server APIs || Node.js || React</p>
      <p style={homeStyle.content}>
      I am a hard-working software developer committed to delivering high-quality code and exceptional user experiences. 
      My collaborative approach and ability to quickly learn new technologies allows me to exceed expectations and become
      a valuable asset to any development team. 
      </p>
    </div>
  );
}

export default Home;
