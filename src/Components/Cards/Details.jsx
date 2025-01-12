import Button from "../Form/Button";

function Details({ currentChat, handleEndCall }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="flex flex-col p-4">
      <h3 className="cursor-default">Chamada Selecionada</h3>
      <div className="flex flex-col  bg-gray-300 p-4 rounded">
        <p className="my-1 text-left cursor-default">
          CallId: {currentChat.callId}
        </p>
        <p className="my-1 text-left cursor-default">
          Mídia: {currentChat.media}
        </p>
        <p className="my-1 text-left cursor-default">
          Data Inicial: {formatDate(currentChat.startDate)}
        </p>
        <p className="my-1 text-left cursor-default">
          Serviço: {currentChat.service}
        </p>
        <p className="my-1 text-left cursor-default">
          Chamador: {currentChat.caller}
        </p>

        <Button onClick={() => handleEndCall(currentChat.callId)}>
          Encerrar
        </Button>
      </div>
    </div>
  );
}

export default Details;
