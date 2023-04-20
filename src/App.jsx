import { useState } from 'react'
import {  Routes , Route} from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Header } from './components/Header';
import './App.css';
import AllProducts from './components/allProducts';

  function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <AllProducts/>
      </div>
  )
}

export default App;
