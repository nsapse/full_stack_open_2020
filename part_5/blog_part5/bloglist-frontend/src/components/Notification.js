import React from 'react'

  const Notification = ({ 
      successMessage,
      errorMessage
     }) => {
    if (errorMessage) {
        const message = errorMessage
      return (
        <div className="error">
          {message}
        </div>
      )
    }
    else if (successMessage) {
        const message = successMessage
      return (
        <div className="success">
          {message}
        </div>
      )
    }
    return null
  }

export default Notification