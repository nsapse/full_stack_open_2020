import React from "react";
import ReactDOM from "react-dom";

const Footer = (props) => {
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>;
};

const Header = props => {
  return <h1>{props.course}</h1>;
};
const Content = props => {
    return(
        <div>
        <p>{props.part} {props.exercises}</p>
        </div>
    );
};

const App = () => {
  

  const course = "Half Stack Application Development";
  const part1 = {
    name: "Fundamentals of React ",
    exercises: 10
  } 
  const part2 = {
    name: "Using props to pass data ",
    exercises : 7
  }
  const part3 = {
    name: "State of Component ", 
    exercises : 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part = {part1.name} exercises = {part1.exercises}/>  
      <Content part = {part2.name} exercises = {part2.exercises}/>  
      <Content part = {part3.name} exercises = {part3.exercises}/>  
    <Footer exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
    </div>
  );

};

ReactDOM.render(<App />, document.getElementById("root"));


    // <Content part = {part1} exercise = {exercises1} />
    // <Content part = {part2} exercise = {exercises2} />
    // <Content part = {part3} exercise = {exercises3} />
        // <p>
            // {props.part}
            // {props.exercise}
        // </p>