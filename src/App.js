import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import routes
import Home from './routes/Home';
import CharacterDetails from './routes/CharacterDetails'

//import components
import Navbar from './components/Navbar';

function App() {
  
  return (
    /* envuelto el componente principal en el Router */
    <Router>
      {/* Navbar aca para que se vea en todas las vistas */}
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/:id"} element={<CharacterDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
