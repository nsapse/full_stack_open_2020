import React from 'react'

const InputField = ({value, onChange}) => {
    return(
      <p>
      number:
      <input
      value = {value} 
      onChange = {onChange}
      />
      </p>  
    )
}

export default InputField