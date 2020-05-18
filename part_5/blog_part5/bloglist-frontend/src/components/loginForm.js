import React from 'react'

const LoginForm = ({
    errorMessage,
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                username:
          <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                password:
          <input
                    type="text"
                    value={password}
                    name="Password"
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">login</button>
        </form>
    </div>
)

export default LoginForm