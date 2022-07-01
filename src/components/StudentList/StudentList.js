import React from "react";
import Card from "../Card/Card";
import { students } from "../../data/studentData";
import styles from "./Studentlist.module.css";


const StudentList = () => {
  const studentList = students.map((d) => (
    <Card key={d.id} name={d.name} image={d.image} gpa={d.gpa} />
  ));
  return <div className={styles.studentcontainer}>{studentList}</div>;
};

export default StudentList;
