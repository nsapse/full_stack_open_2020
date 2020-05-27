import React, { useState, useImperativeHandle } from 'react'
// eslint-disable-next-line linebreak-style

const Toggleable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenvisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenvisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="toggleableContent">
        {props.children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
})

Toggleable.displayName = 'Togglable'

export default Toggleable
