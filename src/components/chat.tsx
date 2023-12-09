import { useState, useEffect } from 'react'


function Chat({ userName, onSend }) {
    const [username, setUsername] = useState(userName)
    const [msg, setMsg] = useState('')
    return (
    <>
        <div className="container">
            <div className="msg">
            <p>{username}</p>
            <h3>
                Hello world!
            </h3>
            </div>
            <hr width="85%" color="#646cff" className="sep"/>
            <div className="card">
            <label>
                <input value={msg} onChange={(e) => {
                    setMsg(e.target.value)
                }} placeholder="Type you message..." type="text"/>
            </label>
            <button onClick={() => {
                onSend(msg)
                setMsg('')
            }}>Send</button>
            </div>
        </div>
    </>
    )
}

export default Chat