import React from "react";
import Link from "next/link";

export default function Homepage({ plants }) {
  // let favoritePlantArray = [];

  function handleAddFavoritePlant(id) {
    const favoritePlants = plants.filter((plant) => plant.id === id);
    console.log("my-favorite-plants:", favoritePlants);
    return favoritePlants;
  }

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
            <button onClick={handleAddFavoritePlant}>Favorite</button>
          </li>
        ))}
      </ul>
    </>
  );
}
