import React , {useState,useEffect} from "react" ;
import './Potter.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';



function Characters(){
    return(
        <>
        <div>characters</div>
        </>
    )

}



export function Potter(){

    return(
        <>
        <div className="Potter">
            <div className="navpotter">
                <button >characters</button>
                <button>Books</button>
                <button>Spells</button>
                <button>houses</button>
            </div>


        </div>
        <Router>
            <Routes>
                <Route path="/potter/character" element={<Characters/>} ></Route>
            </Routes>
        </Router>
        </>

        


    )



}