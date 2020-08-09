import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import Form from "./Form.js";
import Footer from "./Footer";

function App() {
  const API_KEY = "c565ef5877659c85da57c47757ced4e5";
  const API_ID = "29fe6d7e";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [mapCenter, setMapCenter] = useState({
    lat: 40.060322,
    lng: -83.022926,
  });
  const [mapZoom, setMapZoom] = useState(7);
  const [position, setPosition] = useState([40.060322, -83.022926]);
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    )
      .then((Response) => Response.json())
      .then((data) => setRecipes(data.hits))
      .catch((error) => console.log(error));
  };
  console.log(recipes);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const generateRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  console.log(query);
  return (
    <div className="app">
      <Navbar />
      <div className="showcase">
        <h1 className="showcase-header">Welcome to Halwa Sweet Restaurant</h1>
      </div>
      <form onSubmit={generateRecipe} className="form_data">
        <input
          type="text"
          className="searchInput"
          placeholder="search for food"
          value={search}
          onChange={updateSearch}
        />
        <button className="searchBtn">Search</button>
      </form>
      <div className="recipies">
        {recipes.length != 0 && query.length != 0 ? (
          recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        ) : (
          <div className="foodNotFound">
            <h3>Sorry, Your food is not available</h3>
            <p>Please search for other foods</p>
          </div>
        )}
      </div>
      <Reviews rating={5} />
      <div className="contact-section">
        <Map center={mapCenter} zoom={mapZoom} position={position} />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
