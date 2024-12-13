// import React, { StrictMode } from 'react';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Meal } from './assets/Component/Meal';
import { Cocktail } from './assets/Component/Cocktail';
import { Potter } from './assets/Component/Potter';
import { IndianBank } from './assets/Component/IndianBank';
import Navbar from './assets/Component/navbar';

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