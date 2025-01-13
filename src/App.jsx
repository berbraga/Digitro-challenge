import "./App.css";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Join from "./pages/Join/Join"
import Chat from "./pages/Chat/Chat"

function App() {

  const [socket, setSocket] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Redireciona para Join se o chat ainda não estiver visível */}
        <Route path="/" element={<Navigate to="/join" />} />
        <Route
          path="/join"
          element={
            <Join setSocket={setSocket} />
          }
        />
        <Route
          path="/chat"
          element={
            <Chat socket={socket}  />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
