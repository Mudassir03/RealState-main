import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Personal from './pages/Personal';

function App() {
  return (
   <BrowserRouter>
   <Link to='/asets'>Asets</Link>
     <Routes>
      <Route path='/asets' element={<Personal/>}/>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/detail' element={<Detail></Detail>}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
