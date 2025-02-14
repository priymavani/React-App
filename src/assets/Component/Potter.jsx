import React, { useState, useEffect } from "react";
import "./Potter.css";

export function Potter() {
  const [data, setData] = useState([]); // To store fetched data
  const [endpoint, setEndpoint] = useState("books"); // Endpoint based on button click

  const BASE_URL = "https://potterapi-fedeperin.vercel.app/en"; // API Base URL

  // Fetch data when the endpoint changes
  useEffect(() => {
    if (!endpoint) return; // Avoid fetching data when no endpoint is set

    fetch(`${BASE_URL}/${endpoint}`)
      .then((response) => response.json())
      .then((result) => setData(result || []));
  }, [endpoint]);

  return (
    <div className="potter-container">
      <h1 className="potter-header">Harry Potter API Explorer</h1>

      <div className="potter-buttons">
        <button
          className="potter-button"
          onClick={() => setEndpoint("books")}
        >
          Books
        </button>
        <button
          className="potter-button"
          onClick={() => setEndpoint("characters")}
        >
          Characters
        </button>
        <button
          className="potter-button"
          onClick={() => setEndpoint("houses")}
        >
          Houses
        </button>
        <button
          className="potter-button"
          onClick={() => setEndpoint("spells")}
        >
          Spells
        </button>
      </div>

      <div className="potter-data">
        {data.map((item, index) => (
          <div className="potter-card" key={index}>
            {item.image && (
              <img
                src={item.image}
                alt={item.name || "Unnamed"}
                className="potter-card-img"
              />
            )}

            {/* Display book details */}
            {endpoint === "books" && (
              <>
                {item.title && <h3 className="potter-card-title">Title: {item.title}</h3>}
                {item.originalTitle && (
                  <p className="potter-card-text"> <span className="title">Original Title:</span> {item.originalTitle}</p>
                )}
                {item.releaseDate && (
                  <p className="potter-card-text"><span className="title">Release Date:</span> {item.releaseDate}</p>
                )}
                {item.description && (
                  <p className="potter-card-text"><span className="title">Description:</span> {item.description}</p>
                )}
                {item.pages && <p className="potter-card-text">  Pages: {item.pages}</p>}
                {item.cover && (
                  <img
                    src={item.cover}
                    alt={item.title || "Book Cover"}
                    className="potter-card-img"
                  />
                )}
              </>
            )}

            {/* Display character details */}
            {endpoint === "characters" && (
              <>
                {item.nickname && <h3 className="potter-card-title"> <span className="title">Name:  </span>{item.nickname}</h3>}
                {item.hogwartsHouse && (
                  <p className="potter-card-text"> <span className="title">Hogwarts House: </span>{item.hogwartsHouse}</p>
                )}
                {item.birthdate && (
                  <p className="potter-card-text"> <span className="title">Birthdate: </span>{item.birthdate}</p>
                )}
                {item.interpretedBy && (
                  <p className="potter-card-text"> <span className="title">Interpreted By: </span>{item.interpretedBy}</p>
                )}
              </>
            )}

            {/* Display house details */}
            {endpoint === "houses" && (
              <>
                {item.house && <h3 className="potter-card-title"> <span className="title">House:</span> {item.house}</h3>}
                {item.emoji && <p className="potter-card-text"><span className="title">Symbol:</span> {item.emoji}</p>}
                {item.founder && <p className="potter-card-text"><span className="title">Founder:</span> {item.founder}</p>}
                {item.animal && <p className="potter-card-text"><span className="title">Animal: </span>{item.animal}</p>}
                {item.colors && (
                  <p className="potter-card-text"><span className="title">Colors:</span> {item.colors.join(", ")}</p>
                )}
              </>
            )}

            {/* Display spell details */}
            {endpoint === "spells" && (
              <>
                {item.spell && <h3 className="potter-card-title"><span className="title">Spell:</span> {item.spell}</h3>}
                {item.use && <p className="potter-card-text"><span className="title">Usage:</span> {item.use}</p>}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
