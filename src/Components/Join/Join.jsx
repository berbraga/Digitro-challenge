import { io } from "socket.io-client";

function Join({ setSocket, setChatVisibility }) {
  const handleConnect = (username, maxCalls) => {
    const socket = io("http://dev.digitro.com", {
      reconnectionDelayMax: 10000,
      path: "/callcontrol",
    });

    
    socket.emit("USER_CONNECT", { username, maxCalls });

    // Confirmando conexão
    socket.on("USER_CONNECTED", () => {
      console.log(`Usuário ${username} conectado com sucesso, com limite de ${maxCalls} chamadas.`);
      setSocket(socket); 
      setChatVisibility(true); 
    });

    // tratamento de erro 
    socket.on("USER_CONNECTION_ERROR", (error) => {
      console.error("Erro ao conectar:", error);
      alert("Erro na conexão: " + error.error);
    });
  };

  return (
    <div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          const maxCalls = Number(e.target.maxCalls.value);
          handleConnect(username, maxCalls);
        }}
      >
        <input name="username" placeholder="Nome do usuário" required />
        <input
          name="maxCalls"
          type="number"
          placeholder="Máximo de chamadas"
          min="1"
          required
        />
        <button type="submit">Conectar</button>
      </form>
    </div>
  );
}

export default Join;
