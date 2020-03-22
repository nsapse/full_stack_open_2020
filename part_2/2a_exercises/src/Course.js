import React from 'react'
import Content from './components/Content'
import Header from './components/Header'

const Course = ({course}) => {
    return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
    )
}

export default Course