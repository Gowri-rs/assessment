import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import AddFeedback from "./components/AddFeedback"
import EditFeedback from "./components/EditFeedback"


function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/add" element={<AddFeedback/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/edit" element={<EditFeedback/>}/>


      </Routes>
    </>
  )
}

export default App
