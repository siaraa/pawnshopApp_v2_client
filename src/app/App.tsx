import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from "./pages/mainPage/MainPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
