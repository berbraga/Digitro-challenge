import { io } from "socket.io-client";

  const socket = io("http://dev.digitro.com", {
    reconnectionDelayMax: 1000,
    path: "/callcontrol",
    transports: ["websocket"], // Garantir uso de WebSocket
    reconnection: true,       // Habilitar reconexões automáticas
    reconnectionAttempts: 5,  // Tentar reconectar até 5 vezes
    reconnectionDelay: 1000,  // Esperar 1s antes de tentar reconectar
  });

export default socket;
