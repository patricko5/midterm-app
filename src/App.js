import React from "react";
import "./App.css";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div>
      <h1 className="title">Student list</h1>
      <div className="card-container">
        <StudentList />
      </div>
    </div>
  );
};

export default App;
