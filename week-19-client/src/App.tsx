import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState("");
  const [myMessage, setMyMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      setSocket(newSocket);
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessages(message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  if (!socket) {
    return <div>Connecting to Websocket Server.....</div>
  }

  return (
    <>
      <h2>Connected to Server</h2>
      <input placeholder='Type message here' type='text' onChange={e => setMyMessage(e.target.value)} />
      <button onClick={() =>
         socket.send(myMessage)
        }>Send</button>
      <p>{messages}</p>
    </>
  )
}

export default App