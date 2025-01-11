import { useRef } from "react";
import { io } from "socket.io-client";

function Join({setChatVisibility, setSocket}) {

  const usernameRef = useRef();
  const userQtdMessage = useRef();

  const handleSubmit = async() => {
    const  username = usernameRef.current.value;
    const qtdMessage = userQtdMessage.current.value;
    if(username.trim() === '' || qtdMessage.trim() === '') return;

    console.log("Submit", username, qtdMessage);

    const socket = await io.connect("http://dev.digitro.com")
    socket.emit("set_username", username);
    socket.emit("set_calls", userQtdMessage);
    setSocket(socket);

    //setChatVisibility(true);
  }

  return (
    <div className="flex flex-col">
      <h1 className="m-1">Entrar</h1>
      <input type="text" placeholder='Nome' ref={usernameRef} className="m-1" />
      <input type="number" placeholder='numero de mensagens' ref={userQtdMessage} className="m-1" />
      <button className="m-1" onClick={ ()=>handleSubmit() } >Entrar</button>

    </div>
  );
}

export default Join
