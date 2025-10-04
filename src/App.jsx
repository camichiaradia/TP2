import React from "react"
import "./Screen/MessageScreen/MessageScreen.css"
import MessageScreen from "./Screen/MessageScreen/MessageScreen"
import { Route, Routes } from "react-router"
import HomeScreen from "./Screen/HomeScreen/HomeScreen"


function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" 
          element={<MessageScreen/>}
          />
        
          <Route path="/contacto" 
          element={<HomeScreen/>}
          />
        </Routes>
      </div>
    </div>
  )
}
export default App


