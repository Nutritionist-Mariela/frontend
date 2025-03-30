import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Appointments from './pages/Appointments.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agendarconsulta" element={<Appointments />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
