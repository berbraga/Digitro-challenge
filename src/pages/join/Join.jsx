import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSocket } from "../../store/slices/chatSlice";
import { io } from "socket.io-client";
import InputField from "../../components/form/InputField";
import Button from "../../components/form/Button";

function Join({ setSocket }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleConnect = (username, maxCalls) => {
    const socket = io("http://dev.digitro.com", {
      reconnectionDelayMax: 10000,
      path: "/callcontrol",
    });
    if (maxCalls > 8) {
      alert("O número de chamadas deve ser menor que 8.");
      return;
    }
    if (maxCalls < 1) {
      alert("O número de chamadas deve ser maior que 0.");
      return;
    }
    socket.emit("USER_CONNECT", { username, maxCalls });

    socket.on("USER_CONNECTED", () => {
      localStorage.setItem("username", username);
      console.log(
        `Usuário ${username} conectado com sucesso, com limite de ${maxCalls} chamadas.`
      );
      setSocket(socket);
      navigate("/chat");
    });

    socket.on("USER_CONNECTION_ERROR", (error) => {
      console.error("Erro ao conectar:", error);
      alert("Erro na conexão: " + error.error);
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">Conectar</h2> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          const maxCalls = Number(e.target.maxCalls.value);
          handleConnect(username, maxCalls);
        }}
      >
        <InputField
          label="Nome do usuário"
          name="username"
          placeholder="Digite seu nome"
          required
          className="m-1"
        />
        <InputField
          label="Máximo de chamadas"
          name="maxCalls"
          type="number"
          placeholder="n* limite de chamadas"
          required
          min="1"
          className="m-1"
        />
        <Button type="submit" className="w-full">
          Conectar
        </Button>
      </form>
    </div>
  );
}

export default Join;
