import React from 'react';
import ReactDOM from 'react-dom';
import Part from './Part'

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(
        part =>
        <li key = {part.id}>
          <p>{part.name}: {part.exercises}  </p>
        </li>
      )}
    </div>
  )
}

export default Content