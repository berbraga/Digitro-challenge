import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Importa o Provider
import store from "./store"; // Importa o store
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
