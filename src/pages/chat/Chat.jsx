import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addChat,
  removeChat,
  setCurrentChat,
  clearCurrentChat,
} from "../../store/slices/chatSlice";
import { useNavigate } from "react-router-dom";
import Chamados from "../../components/cards/Chamados";
import Details from "../../components/cards/Details";
import Button from "../../components/form/Button";

function Chat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { socket, chats, currentChat } = useSelector((state) => state.chat);
  const userName = localStorage.getItem("username");

  useEffect(() => {
    if (!socket) {
      console.error("Socket não está configurado!");
      alert("Entre antes de acessar o chat.");
      navigate("/join");
      return;
    }

    socket.on("NEW_CALL", (call) => {
      dispatch(addChat(call));
      socket.emit("NEW_CALL_ANSWERED", { callId: call.callId });
    });

    socket.on("CALL_ENDED", (data) => {
      dispatch(removeChat(data.callId));
      if (currentChat?.callId === data.callId) {
        dispatch(clearCurrentChat());
      }
    });

    return () => {
      socket.off("NEW_CALL");
      socket.off("CALL_ENDED");
    };
  }, [socket, dispatch, currentChat, navigate]);

  const handleEndCall = (callId) => {
    socket.emit("END_CALL", { callId });
  };

  return (
    <div>
      <div className="flex align-center justify-center items-center p-4">
        <p className="mx-2 p-0 text-center font-bold text-2xl cursor-default">
          {userName}
        </p>
        <Button onClick={() => navigate("/join")}>Desconectar</Button>
      </div>
      <div className="flex items-start ">
        <div
          className={`p-4 shadow-xl bg-white rounded-md container-transition ${
            chats.length > 0 ? "container-expanded" : "container-collapsed"
          }`}
        >
          <h2 className="cursor-default font-bold text-xl">
            Chats em andamento
          </h2>
          <div className="flex flex-col">
            {chats.map((chat) => (
              <Chamados
                key={chat.callId}
                chat={chat}
                onSelect={(chat) => dispatch(setCurrentChat(chat))}
              />
            ))}
          </div>
        </div>
        {currentChat && (
          <Details currentChat={currentChat} handleEndCall={handleEndCall} />
        )}
      </div>
    </div>
  );
}

export default Chat;
