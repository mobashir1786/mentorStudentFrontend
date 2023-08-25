import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';

function App() {
  let cookie = document.cookie;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={cookie ? <Home /> : <Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
          {/* <Route  path='/' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
