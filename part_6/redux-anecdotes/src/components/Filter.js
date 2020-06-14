import React from 'react'
import { useDispatch } from "react-redux";
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
const dispatch = useDispatch()
  const handleChange = (event) => {
    event.preventDefault()
    const content = event.target.value 
    dispatch(filterChange(content))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <form>
       Filter <input name="filter_input" onChange={handleChange} />
      </form>
    </div>
  )
}

export default Filter