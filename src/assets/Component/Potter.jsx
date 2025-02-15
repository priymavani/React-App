import React , {useState,useEffect} from "react" ;
import './potter.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';


export const Potter = () => {
  const [data, setData] = useState([]); // To store fetched data
  const [endpoint, setEndpoint] = useState(""); // Endpoint based on button click

  const BASE_URL = "https://potterapi-fedeperin.vercel.app/en"; // API Base URL

  // Fetch data when the endpoint changes
  useEffect(() => {
    if (!endpoint) return; // Avoid fetching data when no endpoint is set

    fetch(`${BASE_URL}/${endpoint}`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [endpoint]);

  return (
    <div>
      <div>
        {/* Title */}
        <h1>Harry Potter API Explorer</h1>

        {/* Category Buttons */}
        <div>
          <button onClick={() => setEndpoint("books")}>Books</button>
          <button onClick={() => setEndpoint("characters")}>Characters</button>
          <button onClick={() => setEndpoint("houses")}>Houses</button>
          <button onClick={() => setEndpoint("spells")}>Spells</button>
        </div>

        {/* Display Data */}
        <div>
          <h2>{endpoint && endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}</h2>

          <div>
            {data.map((data) => (
              <div key={data._id || data.id || Math.random()}>
                {/* Dynamic Content */}
                {data.image && <img src={data.image} alt={data.name || "Unnamed"} />}

                {/* Display book details */}
                {endpoint === "books" && (
                  <>
                    {data.title && <h3>Title: {data.title}</h3>}
                    {data.originalTitle && <p>Original Title: {data.originalTitle}</p>}
                    {data.releaseDate && <p>Release Date: {data.releaseDate}</p>}
                    {data.description && <p>Description: {data.description}</p>}
                    {data.pages && <p>Pages: {data.pages}</p>}
                    {data.cover && <img src={data.cover} alt={data.title || "Book Cover"} />}
                  </>
                )}

                {/* Display character details */}
                {endpoint === "characters" && (
                  <>
                    {data.nickname && <h3>Name: {data.nickname}</h3>}
                    {data.hogwartsHouse && <p>Hogwarts House: {data.hogwartsHouse}</p>}
                    {data.birthdate && <p>Birthdate: {data.birthdate}</p>}
                    {data.interpretedBy && <p>Interpreted By: {data.interpretedBy}</p>}
                  </>
                )}

                {/* Display house details */}
                {endpoint === "houses" && (
                  <>
                    {data.house && <h3>House: {data.house}</h3>}
                    {data.emoji && <p>Symbol: {data.emoji}</p>}
                    {data.founder && <p>Founder: {data.founder}</p>}
                    {data.animal && <p>Animal: {data.animal}</p>}
                    {data.colors && <p>Colors: {data.colors.join(", ")}</p>}
                  </>
                )}

                {/* Display spell details */}
                {endpoint === "spells" && (
                  <>
                    {data.spell && <h3>Spell: {data.spell}</h3>}
                    {data.use && <p>Usage: {data.use}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
