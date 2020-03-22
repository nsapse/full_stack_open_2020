import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(
        (part, i) =>
        <Part key= {i} name = {part.name} exercises = {part.exercises}></Part> 
      )}
    </div>
  )
}

export default Content