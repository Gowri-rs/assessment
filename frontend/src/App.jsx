import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import AddFeedback from "./components/AddFeedback"


function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/add" element={<AddFeedback/>}/>
      </Routes>
    </>
  )
}

export default App
