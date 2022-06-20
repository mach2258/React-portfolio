import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/Projects" element ={<projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
