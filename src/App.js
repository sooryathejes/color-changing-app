import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Red from './pages/Red';
import Blue from './pages/Blue';
import Green from './pages/Green';
import Yellow from './pages/Yellow';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
   <Routes>
    <Route path='/' element={<Home color="red"/>}/>
    <Route path='/red' element={<Red/>}/>
    <Route path='/blue' element={<Blue/>}/>
    <Route path='/green' element={<Green/>}/>
    <Route path='/yellow' element={<Yellow/>}/>

    </Routes>
  
  );
}

export default App;
