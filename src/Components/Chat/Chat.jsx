import { useEffect, useState } from "react";
import Chamados from "../Cards/Chamados"

function Chat({ socket, setChatVisibility }) {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    // Escutando novas chamadas
    socket.on("NEW_CALL", (call) => {
      console.log("Nova chamada recebida:", call);
      setChats((prevChats) => [...prevChats, call]);

      // Confirmação 
      socket.emit("NEW_CALL_ANSWERED", { callId: call.callId });
    });

    // Removendo chamadas
    socket.on("CALL_ENDED", (data) => {
      setChats((prevChats) => prevChats.filter((chat) => chat.callId !== data.callId));
      if (currentChat?.callId === data.callId) {
        setCurrentChat(null);
      }
    });

    return () => {
      socket.off("NEW_CALL");
      socket.off("CALL_ENDED");
    };
  }, [socket, currentChat]);

  const handleEndCall = (callId) => {
    socket.emit("END_CALL", { callId });
  };

  return (
    <div>
      <button onClick={() => setChatVisibility(false)}>Desconectar</button>
      <div>
        <h2>Chats em andamento</h2>
        <div className="flex flex-col">
          {chats.map((chat) => (
            // Chamados
            <Chamados key={chat.callId}  chat={chat} setCurrentChat={ setCurrentChat(chat)} />
            /*<li key={chat.callId} onClick={() => setCurrentChat(chat)}>
              {chat.caller} - {chat.service}
            </li>*/
          ))}
        </div>
      </div>
      {currentChat && (
        // details 

        <div>
          <h3>Chat Atual</h3>
          <p>Serviço: {currentChat.service}</p>
          <p>Chamador: {currentChat.caller}</p>
          <button onClick={() => handleEndCall(currentChat.callId)}>Encerrar</button>
        </div>
      )}
    </div>
  );
}

export default Chat;
