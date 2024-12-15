// import React, { StrictMode } from 'react';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import  Meal  from './assets/Component/Meal.jsx';
import  Cocktail  from './assets/Component/Cocktail.jsx';
import { Potter } from './assets/Component/Potter.jsx';
import { IndianBank } from './assets/Component/IndianBank.jsx';
import Navbar from './assets/Component/navbar.jsx';

export default function App(){

  return(
   
    <Router>

        <Navbar/>

        <Routes>
        <Route path="/meal" element={<Meal/>}/> 
        <Route path="/cocktail" element={<Cocktail/>} />
        <Route path="/potter" element={<Potter/>} />
        <Route path="/bank" element={<IndianBank/>} />
        </Routes>
    </Router>
  )
}