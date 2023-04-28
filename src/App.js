import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from './About';
import Home from './Home';
import Shop from './Contact';

function App() {
  return (
<div>

<Router>
<nav>

  <Link className='link'  to = "/">Shop</Link>
  <Link className='link' to = "/about">About</Link>
  <Link className='link'  to = "/shop">Contact</Link>

</nav>

<Routes>
  <Route path = '/' element = {<Home/>}/>
  <Route path = "/about" element = {<About/>}/>
  <Route path = '/shop' element = {<Shop/>}/>

</Routes>

  </Router>
  </div>
  
  );
}

export default App;
