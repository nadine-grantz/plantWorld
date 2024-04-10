import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Homepage({ plants }) {
  // const favoritePlantArray = [];
  // function handleAddFavoritePlant(id) {
  //   // const favoritePlants = plants.filter((plant) => plant.id === id);
  //   console.log("my-favorite-plants:", favoritePlants);
  //   return favoritePlants;
  // }

  const [favoritePlants, setFavoritePlants] = useState([]);

  function addFavoritePlant(fav) {
    setFavoritePlants([...favoritePlants, fav]);
  }

  console.log("favoritePlants: ", favoritePlants);
  return (
    <>
      <h2>Welcome to your PlantWorld</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <Link href={`/plant-details/${plant.slug}`}>
              <img
                src={plant.picture}
                width={100}
                height={149}
                alt={plant.title}
              />
            </Link>
            <button onClick={(event) => addFavoritePlant(plant)}>
              Favorite
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
