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
        <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
        </div>
    );
};

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React ";
  const exercises1 = 10;
  const part2 = "Using props to pass data ";
  const exercises2 = 7;
  const part3 = "State of Component ";
  
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
        />  
    <Footer exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
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