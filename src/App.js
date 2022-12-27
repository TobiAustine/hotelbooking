import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from './pages/List/List';

function App() {
  return (
   
    <BrowserRouter>
 


    <Routes>
    <Route path='/' element={<Home></Home>}  ></Route>
    <Route path='/about' element={<About></About>} > </Route>
    <Route path='/hotels' element={<List></List>} > </Route>
    <Route path='/hotels/:id' element={<Hotel></Hotel>} > </Route>
   


    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
