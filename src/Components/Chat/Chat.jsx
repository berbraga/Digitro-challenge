import { useEffect, useState, useRef } from "react";
//import socket from "../../socket";




function Chat({setChatVisibility, socket}) {
  //const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const [messageList,setMessageList] = useState([]);

useEffect(() => {
  /*socket.on("connect", () => {
    console.log("Conectado ao servidor com ID:", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("Desconectado do servidor. Motivo:", reason);
  });

  socket.on("connect_error", (error) => {
    console.error("Erro de conexão:", error);
  });

  socket.on("serverEvent", (data) => {
    console.log("Recebido do servidor:", data);
    setMessages((prevMessages) => [...prevMessages, data]);
  });

  Limpeza
  return () => {
    socket.off("serverEvent");
    socket.off("connect");
    socket.off("disconnect");
    socket.off("connect_error");
  };*/
}, []);

  const handleSubmit = () => {
    const message = { text: messageRef.current.value };
    
    if (!message.trim()) return;
    socket.emit("message", message);
  }

  const handleOut = () => {
    setChatVisibility(false);
  }
  const sendMessage = () => {
    /*const message = { text: "Hello, Server!" };
    socket.emit("clientEvent", message); // Evento enviado ao servidor
    console.log("Enviado para o servidor:", message);*/
  };

  return (

    <div>
      <h1>Chat</h1>
      <input type="text" ref={messageRef} placeholder="Mensagem" />
      <button onClick={()=>{handleSubmit()}}>enviar</button>
    </div>

  /*  <div>
      <h1>WebSocket Chat</h1>
      <button onClick={sendMessage}>Enviar Mensagem</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{JSON.stringify(msg)}</li>
        ))}
      </ul>
      <button onClick={ ()=>handleOut() }>Sair</button>
    </div>*/
  );
}

export default Chat
