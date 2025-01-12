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
    <div className="flex flex-col  p-4 bg-gray-200 shadow-xl mx-4 rounded-md">
      <h2 className="cursor-default font-bold text-xl ">Chamada Selecionada</h2>
      <div className="flex flex-col   p-4 rounded">
        <p className="my-1 text-left cursor-default">
          <b className="mr-1">CallId:</b>
          {currentChat.callId}
        </p>
        <p className="my-1 text-left cursor-default">
          <b className="mr-1">Mídia:</b>

          {currentChat.media}
        </p>
        <p className="my-1 text-left cursor-default">
          <b className="mr-1">Data Inicial:</b>

          {formatDate(currentChat.startDate)}
        </p>
        <p className="my-1 text-left cursor-default">
          <b className="mr-1">Serviço:</b>

          {currentChat.service}
        </p>
        <p className="my-1 text-left cursor-default">
          <b className="mr-1">Chamador:</b>

          {currentChat.caller}
        </p>

        <Button className="w-[157px]" onClick={() => handleEndCall(currentChat.callId)}>
          Finalizar
        </Button>
      </div>
    </div>
  );
}

export default Details;
