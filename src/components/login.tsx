import { useState } from 'react'




function Login({ onLogin }) {
    const [username, setUsername] = useState('')

    function login() {
        localStorage['react-chat-login'] = username
    }

    return (
    <>
        <div className="login">
            <h1>Welcome To The Chat!</h1>
            <hr width="80%" />
            <label>
                Username:
            </label>
            <input onChange={event => {
                setUsername(event.target.value)
            }} type="text" />
            <button onClick={() => {
                login()
                onLogin(username)
            }}>Join!</button>
        </div>
    </>
    )
}

export default Login