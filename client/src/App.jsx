import './App.css';
import Navbar from './components/Navbar';
import Adminscreen from './screens/Adminscreen';
import Cartscreen from './screens/Cartscreen';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Registerscreen from './screens/Registerscreen';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/cart' element={<Cartscreen />} />
        <Route path='/register' element={<Registerscreen />} />
        <Route path='/login' element={<Loginscreen />} />
        <Route path='/orders' element={<Ordersscreen />} />
        <Route path='/admin/*' element={<Adminscreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
