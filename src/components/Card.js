import React from "react";
import "./card.css";
const Card = (props) => {
  //   console.log(`${props.name}`);
  return (
    <>
      <div className="container" style={{width: "500px"}}>
        <img className="pictureCard" src={props.image} alt="nice" width="150px" height="150px"></img>
        <h3>{props.name}</h3>

        <h3>{props.gpa}</h3>
      </div>
    </>
  );
};

export default Card;
