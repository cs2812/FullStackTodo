

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';



function App() {


  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      <Route path='/' element={
      <PrivateRoute>
        <Home/>
      </PrivateRoute>
      }/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/signup' element={<Signup/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>

    </div>
  );
}

export default App;
