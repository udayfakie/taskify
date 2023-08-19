import React from 'react'
import StoredData from './StoredData'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './navbar/NavBar';
import Panda from './components/screens/Panda';
import Home from './components/screens/Home';


const App: React.FC  = () => {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home todo='z'  />} />
      <Route path="/panda" element={<Panda />} />
      <Route path="/todo" element={<StoredData />} />
    </Routes>
  </Router>
    
    
  )
}

export default App

