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
  

  // const part1 = {
    //   name: "Fundamentals of React ",
    //   exercises: 10
    // } 
    // const part2 = {
      //   name: "Using props to pass data ",
      //   exercises : 7
      // }
      // const part3 = {
        //   name: "State of Component ", 
        //   exercises : 14
        // }
  const course = {         
  name : "Half Stack Application Development",
  parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data ',
      exercises: 7 
    },
    {
      name: 'State of a Component',
      exercises: 14  
    }
  ]
}
  return (
    <div>
      <Header course={course.name} />
      <Content part = {course.parts[0].name} exercises = {course.parts[0].exercises}/>  
      <Content part = {course.parts[1].name} exercises = {course.parts[1].exercises}/>  
      <Content part = {course.parts[2].name} exercises = {course.parts[2].exercises}/>  
    <Footer exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {parts[2].exercises} />
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