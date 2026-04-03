import "./App.css"
import { renderRoute } from "./route"
import { BrowserRouter , Routes } from "react-router-dom"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes> { renderRoute()}</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
