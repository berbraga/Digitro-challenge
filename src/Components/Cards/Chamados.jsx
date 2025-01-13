import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Chamados({ chat, currentChat, onSelect }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return ` ${hours}:${minutes}:${seconds}`;
  };

  const isSelected = currentChat?.callId === chat.callId;

  return (
    <div
      className={`flex justify-between w-[270px] border-2 m-2 p-2 cursor-pointer rounded-md ${
        isSelected ? "border-blue-500" : "hover:border-red-300"
      }`}
      onClick={() => onSelect(chat)}
    >
      <div className="flex items-center rounded-md bg-orange-100 p-2 cursor-pointer">
        <IoChatbubbleEllipsesSharp color="orange" size="25px" />
      </div>
      <div className="flex flex-col cursor-pointer w-[153px]">
        <p className="mx-1 text-left font-bold text-md cursor-pointer">
          {chat.caller}
        </p>
        <small className="mx-1 text-left font-light cursor-pointer">
          {chat.service}
        </small>
      </div>
      <small className="flex cursor-pointer">
        {" "}
        {formatDate(chat.startDate)}{" "}
      </small>
    </div>
  );
}
export default Chamados;
