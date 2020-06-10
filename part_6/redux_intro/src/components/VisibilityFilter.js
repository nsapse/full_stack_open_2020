import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()

    return(
     <div>
     all <input type="radio" name="filter" onChange={() => dispatch(filterChange('ALL'))}></input>       
     important <input type="radio" name="filter" onChange={() => dispatch(filterChange('IMPORTANT'))}></input>       
     nonimportant <input type="radio" name="filter" onChange={() => dispatch(filterChange('NONIMPORTANT'))}></input>       
     </div>
    )
}

export default VisibilityFilter