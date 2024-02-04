import  'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ProjectsGallery from "./pages/ProjectsGallery";
import Home from "./pages/Home";
import About from './pages/About';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';




function App() {

  return <Router> 
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route 
            path="/"
            element={
              <>
                {/* Components for the home page */}
                <Home />
                <About />
                <ProjectsGallery />
                <Contacts />
                <Footer />
              </>
            }
            />
          </Routes>
        </Wrapper>

        <Footer />
      </div>
  </Router>
}

export default App;
