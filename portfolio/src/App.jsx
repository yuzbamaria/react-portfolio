import  'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ProjectsGallery from "./pages/ProjectsGallery";
import NavBar from './components/NavBar';
import Home from "./pages/Home";


function App() {

  return <Router> 
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-gallery" element={<ProjectsGallery />} />
    </Routes>
  </Router>
}

export default App
