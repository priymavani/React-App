import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

export default function Navbar(){

    return(

        <>
            <div className="navbar">
                <ul className='nav'>
                    <li className='navbox'  ><Link to='/meal'> Meal</Link></li>
                    <li className='navbox' ><Link to='/cocktail'>Cocktail</Link></li>
                    <li className='navbox' ><Link to='/potter'>Potter</Link></li>
                    <li className='navbox' ><Link to='/bank'>Bank</Link></li>
                </ul>
            </div>
        </>
    )
}