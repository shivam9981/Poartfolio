
import './App.css';
import About from './Component/About';
import Education from './Component/Education';
import Exprience from './Component/Exprience';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes , Route } from 'react-router-dom';
import Skils from './Component/Skils';
import Project from './Component/Project';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/About'  element={<About />}/>
        <Route path='/Exprience'  element={<Exprience />}/>
        <Route path='/Education'  element={<Education />}/>
        <Route path='/Skils'  element={<Skils />}/>
        <Route path='/Project'  element={<Project />}/>
      </Routes>
    </div>
  );
}

export default App;
