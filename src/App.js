import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Portafolio from './pages/Portafolio';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;

