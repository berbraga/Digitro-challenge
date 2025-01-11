import './App.css'
import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';
import { useState } from 'react';

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [ socket, setSocket ] = useState(null);
  return (
    <div>

      {
        chatVisibility ? <Chat socket={socket} setChatVisibility={setChatVisibility}/> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility}/>
      }
      {/* <Join />
      <Chat /> */}
    </div>
  );
}

export default App
