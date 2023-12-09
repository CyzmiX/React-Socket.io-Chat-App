import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/chat.tsx';
import Login from './components/login.tsx';

function login() {
  return localStorage?.["react-chat-login"] ?? ''
}

function App() {

  const [msgs, setMsgs] = useState([])
  const [username, setUsername] = useState(login())
  
  return (
    <>
      {username !== '' 
      ? <Chat onSend={msg => {
        console.log(msg)
      }} userName={username}/>
      : <Login onLogin={(name) => setUsername(name)}/>}
    </>
  )
}

export default App
