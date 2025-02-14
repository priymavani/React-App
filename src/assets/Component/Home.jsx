import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

export function Home(){
    return(
        <>
        <div className="HOME">
            <div className="home">
            
            <div className="box01">
                <div className="homeimg">
                    <img src="https://i.pinimg.com/736x/90/88/8c/90888c4fc66bb3e8fd465a5d06a395c0--harry-and-hermione-harry-harry.jpg"  alt="" className="imghome" />
                </div>
                <div className="name"><Link className='link0' to='/potter'>Harry Potter</Link></div>
            </div>

            <div className="box01">
                <div className="homeimg">
                    <img src="https://th.bing.com/th/id/OIP.1zwixZBF8cEJlU8CsSgwhgHaHa?rs=1&pid=ImgDetMain"  alt="" className="imghome" />
                </div>
                <div className="name"><Link className='link0' to='/cocktail'>Drinks</Link></div>
            </div>

            <div className="box01">
                <div className="homeimg">
                    <img src="https://th.bing.com/th/id/OIP.3hN2kEgDpfBg9YVvFs-NUQHaHa?rs=1&pid=ImgDetMain"  alt="" className="imghome" />
                </div>
                <div className="name"><Link className='link0' to='/meal'>Meals</Link></div>
                {/* <div className="sectionDetail">
                A meal section includes a search bar to find meals by name, filters for categories, ingredients, and cuisine/area, plus a recipe button to view meal instructions. Perfect for exploring and customizing meal options. </div> */}
            </div>

         

           

            <div className="box01">
                <div className="homeimg">
                    <img src="https://static.vecteezy.com/system/resources/previews/001/270/738/large_2x/stylish-bank-building-isolated-on-white-background-vector.jpg"  alt="" className="imghome" />
                </div>
                <div className="name"><Link className='link0' to='/bank'>Bank</Link></div>
            </div>
            
                
            </div>

            </div>
        </>
    )
}
