//import './App.css';
import React from 'react'
import { 
   Routes,
   Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Cafe from './pages/Cafe/Cafe.js'
import Upcoming from './pages/Upcoming/Upcoming.js'
import Support from './pages/Support/Support.js'
import SignIn from './pages/Sign/SignIn.js'
import SignUp from './pages/Sign/SignUp.js'

function App() {
  return (
      <Routes>
        <Route index element={<Home/>}/>
        <Route path = "/cafe" element={<Cafe/>}/>
        <Route path = "/upcoming" element={<Upcoming/>}/>
        <Route path = "/support" element={<Support/>}/>
        <Route path = "/signin" element={<SignIn/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
      </Routes>
  );
}

export default App;
