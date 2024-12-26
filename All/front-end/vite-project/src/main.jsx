import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './login/Login1.jsx';
import HomePage1 from './homepage1/HomePage1.jsx';
import HomePage2 from './homepage2/HomePage2.jsx';
import Regist from './regist/Regist.jsx';
import List from './list/List.jsx'
import Edit from './edit/Edit.jsx'
import Description from './description/Description.jsx'
import Admin from './adminpanel/Admin.jsx'

import Admin2 from './adminpanel2/Admin2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/regist' element={<Regist />} />      
      <Route path="/home" element={<HomePage1 />} />
      <Route path="/home2" element={<HomePage2 />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/description" element={<Description />} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin2" element={<Admin2/>} />
    </Routes>
  </BrowserRouter>,
)
