import React , {useState,useEffect} from "react" ;
import './Meal.css'


export default function Meal (){

       const [meal , setMeal]=useState([]);
       const [search , setSearch] = useState("");
       const [categories, setCategories] = useState([]);
       const [areas, setAreas] = useState([]);
       const [ingredients, setIngredients] = useState([]);
       const [filter, setFilter] = useState({ type: "", value: "" });
          const [selectedMeal, setSelectedMeal] = useState(null); // For popup details

   
       useEffect(()=>{
           fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
           .then((response) => response.json())
           .then((data) => setMeal(data.meals || [])
        //    If data.meals is null, it falls back to an empty array ([]) to avoid runtime errors.
           )
           .catch((error) => console.log("Error is from meals  : ",error))
        },[]);

        //categories
        const fetchMeals = (query = "") => {
            let url = "";
        
            if (filter.type === "category") {
              url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter.value}`;
            } else if (filter.type === "area") {
              url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter.value}`;
            } else if (filter.type === "ingredient") {
              url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filter.value}`;
            } else {
              url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
            }
        
            fetch(url)
              .then((response) => response.json())
              .then((data) => setMeal(data.meals || []))
              .catch((error) => console.error("Error fetching meals:", error));
          };
        
          // Fetch categories, areas, and ingredients
          const fetchFilters = () => {
            fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
              .then((res) => res.json())
              .then((data) => setCategories(data.meals || []));
        
            fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
              .then((res) => res.json())
              .then((data) => setAreas(data.meals || []));
        
            fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
              .then((res) => res.json())
              .then((data) => setIngredients(data.meals || []));
          };
        



        // search 
        // const fetchMeals = (value = "") => {
        //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        //       .then((response) => response.json())
        //       .then((data) => setMeal(data.meals || []))
        //       .catch((error) => console.error("Error fetching meals:", error));
        //   };

            useEffect(() => {
            fetchMeals(); 
            fetchFilters(); 
            

            }, []);

        const handleFilterChange = (type ,value ) =>{
           setFilter({type,value});
           fetchMeals();
        }

        const handleSearch = ()=>{
            fetchMeals(search);
        }



          const handleViewRecipe = (idMeal) => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
              .then((response) => response.json())
              .then((data) => setSelectedMeal(data.meals[0] || null))
              .catch((error) => console.error("Error fetching recipe details:", error));
          };


        
   
       return(
           <>
        
            <div className="Meal"><h1 className="headmeal">Explore Meals </h1>

            {/* <h2>Search items</h2> */}
            <div className="searchitem">
                <input className="searchinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for meal.." />
                <button onClick={handleSearch} className="searchbtn">Search</button>
            </div>


            {/* filter  */} 
            <div className="filter">
                <h3 className="headfilter">Filter Meals</h3>
                <select className="select"  onChange = {(e) => handleFilterChange("category" , e.target.value)} >
                    <option  value=""> Select Category</option>

                    {categories.map((cat) => (
                        <option className="options" key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>

                    ))}
                </select>
            

            <select className="select" onChange={(e) => handleFilterChange("area", e.target.value)}>
                <option value="">Select Area</option>
                {areas.map((area) => (
                    <option className="options" key={area.strArea} value={area.strArea}>
                    {area.strArea}
                    </option>
                ))}
             </select>

         <select className="select" onChange={(e) => handleFilterChange("ingredient", e.target.value)}>
            <option  value="">Select Ingredient</option>
            {ingredients.map((ing) => (
                <option className="options" key={ing.strIngredient } value={ing.strIngredient}>
                {ing.strIngredient}
                </option>
              
            ))}
        </select>
         </div>


           <div className="meal"> 
   
           {
               meal.map((i) => (
                   <div key={i.idMeal}  className="mealcard">
                       <div className="mealname">{i.strMeal}</div>
                       <div className="mealimg"><img src={i.strMealThumb} alt={i.strMeal} className="mealimgthumb"  /></div>
                     { i.strArea ? ( <div className="mealarea"> Area : {i.strArea}</div>) :(<div/>)}
                       <div className="ytlink"><a href={i.strYoutube} target="_blank" >Refer video</a></div>
                       <button className="recipe" onClick={()=> handleViewRecipe(i.idMeal)}>View Recipe</button>
                    

                   </div>
               ))
           }
              </div>
              </div>

                  {/* Popup for Recipe Details */}
                  {selectedMeal && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>{selectedMeal.strMeal}</h2>
                        <img
                          src={selectedMeal.strMealThumb}
                          alt={selectedMeal.strMeal}
                          className="popup-img"
                        />
                        <p>
                          <strong>Category:</strong> {selectedMeal.strCategory}
                        </p>
                        <p>
                          <strong>Area:</strong> {selectedMeal.strArea}
                        </p>
                        <p>
                          <strong>Instructions:</strong> {selectedMeal.strInstructions}
                        </p>
                        <a
                          href={selectedMeal.strYoutube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="popup-link"
                        >
                          Watch Video
                        </a>
                        <button className="popup-close" onClick={() => setSelectedMeal(null)}>
                          Close
                        </button>
                      </div>
                    </div>
                  )}



   
   
           </>
       )
   

}


