import React from 'react'

const InputField = ({title, value, onChange}) => {
    return(
      <p>
      {title}:
      <input
      value = {value} 
      onChange = {onChange}
      />
      </p>  
    )
}

export default InputField