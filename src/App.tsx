import { Route, BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import { Auth } from "./components/Auth"
import { Redirect } from "./components/Redirect"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
