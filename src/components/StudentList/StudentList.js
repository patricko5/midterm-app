import React from "react";
import Card from "../Card/Card";
import { students } from "../../data/studentData";
import styles from "./Studentlist.module.css";

const StudentList = () => {
  const handleButtonClick = () => {
    // alert('You clicked the button ')
    console.log("Test");
  };

  const studentList = students.map((d) => (
    <Card
      key={d.id}
      name={d.name}
      image={d.image}
      gpa={d.gpa}
      onchange={() => handleButtonClick()}
    />
  ));

  return <div className={styles.studentcontainer}>{studentList}</div>;
};

export default StudentList;
