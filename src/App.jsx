import React from "react"
import "./Screen/MessageScreen/MessageScreen.css"
import MessageScreen from "./Screen/MessageScreen/MessageScreen"
import { Route, Routes } from "react-router"
import HomeScreen from "./Screen/HomeScreen/HomeScreen"



function App() {
  return (
      <div>
      
        <Routes>
          <Route path="/" 
          element={ <HomeScreen/> }
          />
          <Route path="/contacto" 
          element={ <MessageScreen/> }
          />
        </Routes>
      </div>
  )
}
export default App


