import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

export default function Navbar(){

    return(

        <>
            <div className="navbar">
                <ul  className='nav'>
                <li className='navbox' ><Link className='link' to='/'>Home</Link></li>
                    <li className='navbox' ><Link className='link' to='/potter'>Harry Potter</Link></li>
                    <li className='navbox' ><Link className='link' to='/drinks'>Drinks</Link></li>
                    <li className='navbox'  ><Link className='link' to='/meal'> Meals</Link></li>
                    <li className='navbox' ><Link className='link' to='/bank'>Bank</Link></li>
                    {/* <li className='navbox' ><Link className='link' to='/codinggita'>codinggita</Link></li> */}
             
                </ul>
            </div>

           
        </>
    )
}