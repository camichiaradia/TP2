import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

let elemento_donde_quiero_renderizar_mi_app = document.getElementById("root")
createRoot(
  elemento_donde_quiero_renderizar_mi_app
  ).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
