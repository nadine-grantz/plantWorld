import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Homepage({ plants }) {
  const [favoritePlants, setFavoritePlants] = useState([]);

  function addFavoritePlant(fav) {
    setFavoritePlants([...favoritePlants, fav]);
  }

  console.log("favoritePlants: ", favoritePlants); // fire the onClick event => add this plant to the favoritePlants
  // console.log("plant: ", plants); every plant is in an [{}] in the console, 13 {}
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
