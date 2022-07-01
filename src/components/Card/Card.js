import React from "react";
import "./card.css";
const Card = ({image, name, gpa, onchange}) => {
  //   console.log(`${name}`);
  //style={{width: "500px"}}
  return (
    <>
      <div className="container" >
        <img className="pictureCard" src={image} alt="nice" width="150px" height="150px"></img>
        <h3>{name}</h3>

        <h3>{gpa}</h3>
        <button onChange={onchange}>Grade</button>
      </div>
    </>
  );
};

export default Card;
