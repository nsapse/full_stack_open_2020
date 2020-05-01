import React from 'react'

const Total = ({ course }) => {
  const sum = course.parts.reduce(
      (sum, part) => {
        return sum + part.exercises
      },0)
       
  return(
   <div>
       <p>
           Total of {sum} exercises
       </p>
   </div> 
  ) 
}

export default Total