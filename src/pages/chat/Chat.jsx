import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSocket,
  addChat,
  removeChat,
  setCurrentChat,
  clearCurrentChat,
} from "../../store/slices/chatSlice";
import Chamados from "../../components/cards/Chamados";
import Details from "../../components/cards/Details";
import Button from "../../components/form/Button";

function Chat({ socket }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    chats,
    currentChat,
    socket: reduxSocket,
  } = useSelector((state) => state.chat);

  useEffect(() => {
    if (!reduxSocket) {
      console.error("Socket não está configurado!");
      alert("Entre antes de acessar o chat");
      navigate("/join");
      return;
    }

    reduxSocket.on("NEW_CALL", (call) => {
      dispatch(addChat(call));
      reduxSocket.emit("NEW_CALL_ANSWERED", { callId: call.callId });
    });

    reduxSocket.on("CALL_ENDED", (data) => {
      dispatch(removeChat(data.callId));
      if (currentChat?.callId === data.callId) {
        dispatch(clearCurrentChat());
      }
    });

    return () => {
      reduxSocket.off("NEW_CALL");
      reduxSocket.off("CALL_ENDED");
    };
  }, [reduxSocket, currentChat, dispatch, navigate]);

  const handleEndCall = (callId) => {
    reduxSocket.emit("END_CALL", { callId });
  };

  return (
    <div>
      <div className="flex align-center justify-center items-center p-4">
        <p className="mx-2 p-0 text-center font-bold text-2xl cursor-default">
          {localStorage.getItem("username")}
        </p>
        <Button onClick={() => navigate("/join")}>Desconectar</Button>
      </div>
      <div className="flex items-start">
        <div className="p-4 shadow-xl bg-white rounded-md">
          <h2 className="cursor-default font-bold text-xl">
            Chats em andamento
          </h2>
          <div className="flex flex-col">
            {chats.map((chat) => (
              <Chamados
                key={chat.callId}
                chat={chat}
                currentChat={currentChat}
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
