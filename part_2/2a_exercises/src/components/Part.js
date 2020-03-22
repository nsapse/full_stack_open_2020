import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

export default Part