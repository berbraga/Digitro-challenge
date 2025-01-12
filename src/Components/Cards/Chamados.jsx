import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Chamados({ chat, onSelect }) {
  console.log(chat);
  const formatDate = (dateString) => {
    const date = new Date(dateString);


    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return ` ${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="flex cursor-pointer " onClick={() => onSelect(chat)}>
      {/*<p>
        {chat.caller} - {chat.service}
      </p>*/}
      <div className="flex border">
        <div className="flex">
          <p>
            <IoChatbubbleEllipsesSharp />
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mx-1 text-left text-bold cursor-default">
            {chat.caller}
          </p>
          <p className="mx-1 text-left cursor-default">{chat.service}</p>
        </div>
        <div className="flex"> {formatDate(chat.startDate)} </div>
      </div>
    </div>
  );
}

export default Chamados;
