import React from 'react';

import {Link} from 'react-router-dom';

export default function Navbar(){

    return(

        <>
            <div className="navbar">
                <ul>
                    <li  ><Link to='/meal'> Meal</Link></li>
                    <li ><Link to='/cocktail'>Cocktail</Link></li>
                    <li ><Link to='/potter'>Potter</Link></li>
                    <li ><Link to='/bank'>Bank</Link></li>
                </ul>
            </div>
        </>
    )
}