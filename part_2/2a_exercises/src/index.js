import React from 'react';
import ReactDOM from 'react-dom';
import CourseDisplay from './Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <CourseDisplay course = {course}></CourseDisplay>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
