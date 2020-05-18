import React from 'react'

const LogoutButton = ({ handleLogout }) => (
  <div>
    <button onClick={handleLogout}>Logout</button> 
  </div>
)

export default LogoutButton