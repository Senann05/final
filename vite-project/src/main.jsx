import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './login/Login1.jsx';
import HomePage1 from './homepage1/HomePage1.jsx';
import HomePage2 from './homepage2/HomePage2.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path="/home" element={<HomePage1 />} />
      <Route path="/home2" element={<HomePage2 />} />
    </Routes>
  </BrowserRouter>,
)
