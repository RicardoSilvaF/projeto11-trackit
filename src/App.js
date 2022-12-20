import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPag from "./pages/LoginPag.js";
import CadastroPag from "./pages/CadastroPag.js";
import HabitosPag from "./pages/HabitosPag.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPag/>} /> 
        <Route path="/cadastro" element={<CadastroPag/>} />
        <Route path="/habitos" element={<HabitosPag/>} />
      </Routes>
    </BrowserRouter>
  )
}
