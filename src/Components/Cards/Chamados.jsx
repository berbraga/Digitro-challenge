import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Chamados({ chat, onSelect }) {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);


    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return ` ${hours}:${minutes}:${seconds}`;
  };
  return (
    <div
      className="flex border-2 m-2 p-2 cursor-pointer hover:border-orange-300"
      onClick={() => onSelect(chat)}
    >
      <div className="flex align-center justify-center">
        <p>
          <IoChatbubbleEllipsesSharp />
        </p>
      </div>
      <div className="flex flex-col">
        <p className="mx-1 text-left text-bold cursor-default">{chat.caller}</p>
        <small className="mx-1 text-left cursor-default">{chat.service}</small>
      </div>
      <div className="flex"> {formatDate(chat.startDate)} </div>
    </div>
  );
}

export default Chamados;
