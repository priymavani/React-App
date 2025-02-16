// import React , {useState,useEffect} from "react" ;
// import './cocktail.css'



// export default function Cocktail(){
    

//     const [drink , setDrink]=useState([]);
//     const [search , setSearch] = useState("");
//     const [categories,setCategories] = useState([]);
//     const [ingredients , setIngrendiants] = useState([]);
//     const [alcoholic , setAlcoholic] = useState([]);
//     const [filter , setFilter] = useState({type:"", value: ""});

//     useEffect(() => {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail")
//           .then((response) => response.json())
//           .then((data) => setDrink(data.drinks || []) )
//           //    If data.drinks is null, it falls back to an empty array ([]) to avoid runtime errors.
//           .catch((error) => 
//             console.error("Error in fetch drinks:", error)
//           );
//       }, []);

//       const fetchDrinks = (query = "") =>{
//         let url ="";

//         if(filter.type === "category"){
//           url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.value}`;
//         }else if (filter.type === "ingredient"){
//           url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter.value}`;
//         }else if (filter.type === "alcoholic"){
//           url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter.value}`;
//         }else {
//           url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
//         }

//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => setDrink(data.drinks))
//         .catch((error) => console.log("ERROR IN FETCHING URL OF DRINKS : ",error))
//       };


//       // fetch categories , ingredients , alcoholic 
//       const fetchFilter = () => {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
//         .then((res) => res.json())
//         .then((data) => setCategories(data.drinks || []));

//         fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
//         .then ((res) => res.json())
//         .then((data) => setIngrendiants(data.drinks || []))

//         fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
//         .then((res) => res.json())
//         .then((data) => setAlcoholic(data.drinks || []))
//       };


//       useEffect(() => {
//         fetchDrinks();
//         fetchFilter();
//       },[]);

//       const handleFilterChange = (type ,value ) =>{
//         setFilter({type,value});
//         fetchDrinks();
//      }
//       const handleSearch = () => {
        
//         fetchDrinks(search);
//       }

//     return(
//         <>

//         <div className="Drinks">
//           <h2>Search items</h2>
//           <div className="searchitem">
//             <input type="text" className="searchinput" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search drinks here"/>
//             <button className="searchbtn" onClick={handleSearch}> Search</button>
//           </div>

//           {/* filter  */}

//               {/* categories  */}
//           <div className="filter">
//             <h3>Fiter Meals</h3>
//             <select onChange={(e) => handleFilterChange("category", e.target.value)} className="select">
//               <option value="">Search Category</option>
//               {categories.map((cat) => (
//                 <option className="options" key={cat.strCategory} value={cat.strCategory}>
//                   {cat.strCategory}
//                 </option>
//               ))}
//             </select>

          
//                 {/* Alcoholic  */}
//             <select className="select" onChange={(e) => handleFilterChange("alcoholic", e.target.value)}>
//                 <option value="">Select Area</option>
//                 {alcoholic.map((area) => (
//                     <option className="options" key={area.strAlcoholic} value={area.strAlcoholic}>
//                     {area.strAlcoholic}
//                     </option>
//                 ))}
//              </select>

//                 {/* ingredients  */}
//                 <select className="select" onChange={(e) => handleFilterChange("ingredient", e.target.value)}>
//                   <option value="">Select Ingredient</option>
//                   {ingredients.map((ing) => (
//                     <option className="options" key={ing.strIngredient1} value={ing.strIngredient}>
//                       {ing.strIngredient} 
//                     </option>
//                   ))}
//                 </select>




//           </div>



//        <div className="cocktail">
//         {drink.map((i)=>(
//              <div key={i.idDrink} className="drinkcard">
//                 <div className="drinkname">{i.strDrink}</div>
//                 <div className="drinkimg"><img src={i.strDrinkThumb} alt="" className="drinkthumb" /></div>
//                 <div className="drinkcategory">{i.strCategory}</div>
//                 <div className="drinkalcoholic">{i.strAlcoholic}</div>
                
//             </div>
//         ))}
       
//        </div>

//        </div>

//         </>
//     )



// }


import React, { useState, useEffect } from "react";
import './Cocktail.css';

export default function Cocktail() {
    const [drink, setDrink] = useState([]);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [alcoholic, setAlcoholic] = useState([]);
    const [filter, setFilter] = useState({ type: "", value: "" });
    const [selectedCocktail,setSelectedCocktail] = useState(null);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched drinks:", data.drinks); // Debugging log
                setDrink(data.drinks || []);
            })
            .catch((error) => console.error("Error in fetch drinks:", error));
    }, []);

    const fetchDrinks = (query = "") => {
        let url = "";

        if (filter.type === "category") {
            url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.value}`;
        } else if (filter.type === "ingredient") {
            url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filter.value}`;
        } else if (filter.type === "alcoholic") {
            url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter.value}`;
        } else {
            url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.drinks)) {
                    setDrink(data.drinks);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch((error) => console.error("Error fetching drinks:", error));
    };

    // Fetch categories, ingredients, and alcoholic drinks
    const fetchFilter = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then((res) => res.json())
            .then((data) => setCategories(data.drinks || []));

        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched ingredients:", data); // Debugging log
                setIngredients(data.drinks || []); // Ensure ingredients is an array
            });

        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
            .then((res) => res.json())
            .then((data) => setAlcoholic(data.drinks || []));
    };

    useEffect(() => {
        fetchDrinks();
        fetchFilter();
    }, []);

    const handleFilterChange = (type, value) => {
        setFilter({ type, value });
        fetchDrinks();
    };

    const handleSearch = () => {
        fetchDrinks(search);
    };

    return (
        <>
            <div className="Drinks">
                <h2 className="headmeal">Drinks</h2>
                <div className="searchitem">
                    <input
                        type="text"
                        className="searchinput"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search drinks here"
                    />
                    <button className="searchbtn" onClick={handleSearch}>Search</button>
                </div>

                {/* Filter Section */}
                <div className="filter">
                    <h3>Filter Drinks</h3>

                    {/* Categories Filter */}
                    <select onChange={(e) => handleFilterChange("category", e.target.value)} className="select">
                        <option value="">Search Category</option>
                        {categories.map((cat) => (
                            <option className="options" key={cat.strCategory} value={cat.strCategory}>
                                {cat.strCategory}
                            </option>
                        ))}
                    </select>

                    {/* Alcoholic Filter */}
                    <select className="select" onChange={(e) => handleFilterChange("alcoholic", e.target.value)}>
                        <option value="">Select Alcohilc</option>
                        {alcoholic.map((area) => (
                            <option className="options" key={area.strAlcoholic} value={area.strAlcoholic}>
                                {area.strAlcoholic}
                            </option>
                        ))}
                    </select>

                    {/* Ingredients Filter */}
                    {/* <select className="select" onChange={(e) => handleFilterChange("ingredient", e.target.value)}>
                        <option value="">Select Ingredient</option>
                        {ingredients.map((ing) => (
                            <option className="options" key={ing.strIngredient} value={ing.strIngredient}>
                                {ing.strIngredient}
                            </option>
                        ))}
                    </select> */}
                </div>

                {/* Display Drinks */}
                <div className="cocktail">
                    {drink.map((i) => (
                        <div key={i.idDrink} className="drinkcard">
                            <div className="drinkname">{i.strDrink}</div>
                            <div className="drinkimg">
                                <img src={i.strDrinkThumb} alt={i.strDrink} className="drinkthumb" />
                            </div>
                            <div className="drinkcategory">{i.strCategory}</div>
                            <div className="drinkalcoholic">{i.strAlcoholic}</div>
                            <details className="ingredient">
                                <summary> <strong>
                                    Ingredients :- </strong> </summary>
                                <p>
                                <div className="ing">{i.strIngredient1}</div>
                                <div className="ing">{i.strIngredient2}</div>
                                <div className="ing">{i.strIngredient3}</div>
                                <div className="ing">{i.strIngredient4}</div>
                                 <div className="ing">{i.strIngredient5}</div>
                                 <div className="ing">{i.strIngredient6}</div>
                                 <div className="ing">{i.strIngredient7}</div>
                                 <div className="ing">{i.strIngredient8}</div>
                                 <div className="ing">{i.strIngredient9}</div>
                                 <div className="ing">{i.strIngredient10}</div>
                                 <div className="ing">{i.strIngredient11}</div>
                                 <div className="ing">{i.strIngredient12}</div>
                                 <div className="ing">{i.strIngredient13}</div>
                                 <div className="ing">{i.strIngredient14}</div>
                                 <div className="ing">{i.strIngredient15}</div>
                                 </p>
                            </details>
                            {/* <button onClick={(Cocktail) => setSelectedCocktail(Cocktail)}>View Ingredient</button> */}
                        </div>
                    ))}
                </div>


                {/* {selectedCocktail && (
                    <div className="recipe-modal">
                    <div className="recipe-content">

                        <button className="close-button" onClick={hideRecipe}>X</button>

                        <h2>{selectedCocktail.strDrink} Recipe</h2>
                        <p><strong>Category:</strong> {selectedCocktail.strCategory}</p>
                        <p><strong>Glass:</strong> {selectedCocktail.strGlass}</p>

                        <h3>Ingredients:</h3>
                        <ul>
                        <p>{selectedCocktail.strMeasure1} {selectedCocktail.strIngredient1}</p>
                        <p>{selectedCocktail.strMeasure2} {selectedCocktail.strIngredient2}</p>
                        <p>{selectedCocktail.strMeasure3} {selectedCocktail.strIngredient3}</p>
                        {GetIngredient(selectedCocktail).map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                        
                        </ul>

                        <h3>Instructions:</h3>
                        <p>{selectedCocktail.strInstructions}</p>

                    </div>
                    </div>
                )} */}
            </div>
        </>
    );
}








