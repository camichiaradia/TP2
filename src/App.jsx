import React from "react"
import "./Screen/MessageScreen/MessageScreen.css"
import MessageScreen from "./Screen/MessageScreen/MessageScreen"
import { Route, Routes } from "react-router"
import HomeScreen from "./Screen/HomeScreen/HomeScreen"
import ContactListContextProvider from "./Context/ContactListContext"
import ContactDetailContextProvider from "./Context/ContactDetailContext"



function App() {
  return (
      <div>
      <ContactListContextProvider>
          <Routes>

            <Route path="/" 
            element={ <HomeScreen/> }
            />
            <Route
            element={<ContactDetailContextProvider/>}
            > 
              <Route
              path="/contacto/:id_contacto" 
              element={ <MessageScreen/> }
              />
            </Route>

          </Routes>
        </ContactListContextProvider>
      </div>
  )
}
export default App


