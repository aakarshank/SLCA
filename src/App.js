import './App.css';
import Home from './Home';
import About from './About';
import Team from './Team';
import Mission from './Mission';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/SLCA-website' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path ='/mission' element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
