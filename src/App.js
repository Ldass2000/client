import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Route exact path='/' >
        <Home />
     </Route>
     <Route path='/signin'>
       <Login />
     </Route>
     <Route path='/signup'>
       <Signup />
     </Route>
     <Route path='/profile'>
       <Profile />
     </Route>
    </BrowserRouter>  
  );
}

export default App
