import { useEffect, useState } from "react";
import Chamados from "../Cards/Chamados";
import Button from "../Form/Button";
import Details from "../Cards/Details";

function Chat({ socket, setChatVisibility }) {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const userName = localStorage.getItem("username");

  useEffect(() => {
    // Escutando novas chamadas
    socket.on("NEW_CALL", (call) => {
      setChats((prevChats) => [...prevChats, call]);

      // Confirmação
      socket.emit("NEW_CALL_ANSWERED", { callId: call.callId });
    });

    // Removendo chamadas
    socket.on("CALL_ENDED", (data) => {
      setChats((prevChats) =>
        prevChats.filter((chat) => chat.callId !== data.callId)
      );
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
      <div className="flex align-center justify-center items-center p-4">
        <p className="mx-2 p-0 text-center font-bold text-2xl cursor-default">
          {userName}
        </p>
        <Button onClick={() => setChatVisibility(false)}>Desconectar</Button>
      </div>
      <div className="flex items-start ">
        <div className="p-4 shadow-xl bg-white rounded-md">
          <h2 className="cursor-default font-bold text-xl">
            Chats em andamento
          </h2>
          <div className="flex flex-col ">
            {chats.map((chat) => (
              <Chamados
                key={chat.callId}
                chat={chat}
                onSelect={setCurrentChat}
              />
            ))}
          </div>
        </div>
        {currentChat && (
          // details
          <Details currentChat={currentChat} handleEndCall={handleEndCall} />
        )}
      </div>
    </div>
  );
}

export default Chat;
