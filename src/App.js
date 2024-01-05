


import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import './styles/app.scss'
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <header className='header'>
    <nav className='nav'>
        <Link to={'/login'}>Login</Link>
      </nav>
      <Link to={'/'} className='linkClass'><div className='home'>
        <h1>Home</h1>
        </div></Link>
    
    </header>
<main>
    <Routes>
    <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
    
    </Routes>
    </main>
    </BrowserRouter>
    
  );
}

export default App;
