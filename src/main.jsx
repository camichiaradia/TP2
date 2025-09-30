import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let elemento_donde_quiero_renderizar_mi_app = document.getElementById("root")
createRoot(
  elemento_donde_quiero_renderizar_mi_app
  ).render(
    <App />
)
