
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from '../src/context/notes/NoteState';

function App() {
  return (
    <div>
      <NoteState>
      <Router>
      <Navbar/>

      <Routes>
      <Route exact path='/' element={ <Home /> }>  </Route>
      <Route exact path='/about' element={<About /> }>  </Route>
      
      </Routes>
      
      

      </Router>
      </NoteState>
    </div>
  );
}

export default App;
