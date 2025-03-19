import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/home'
import { ClassicMode } from './Pages/classic'
import { Freeplay } from './Pages/freeplay'
import { Skinbook } from './Pages/skinbook'
import { Test } from './Pages/test'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/classic" element={<ClassicMode/>} />
        <Route path="/freeplay" element={<Freeplay/>} />
        <Route path="/skinbook" element={<Skinbook/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  )
}

export default App
