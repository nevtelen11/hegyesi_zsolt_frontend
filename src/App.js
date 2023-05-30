import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nyito from './Nyito';
import Aruk from './Aruk';
import Megrendeles from './Megrendeles';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nyito/>}></Route>
        <Route path='/aruk' element={<Aruk/>}></Route>
        <Route path='/megrendeles/:id' element={<Megrendeles/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
