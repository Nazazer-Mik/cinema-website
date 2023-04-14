//import './App.css';
import React from 'react'
import { 
   Routes,
   Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Cafe from './pages/Cafe/Cafe.js'
import Upcoming from './pages/Upcoming/Upcoming.js'
import Support from './pages/Support/Support.js'

function App() {
  return (
      <Routes>
        <Route index element={<Home/>}/>
        <Route path = "/cafe" element={<Cafe/>}/>
        <Route path = "/upcoming" element={<Upcoming/>}/>
        <Route path = "/support" element={<Support/>}/>
      </Routes>
  );
}

export default App;
