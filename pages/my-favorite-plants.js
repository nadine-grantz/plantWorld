import React from "react";
import Link from "next/link";

export default function MyFavoritePlants({
  favoritePlants,
  setFavoritePlantsState,
}) {
  console.log("My favorite Plants Page: ", favoritePlants);

  function removeFromFavorites(plantToRemove) {
    const updatedFavorites = favoritePlants.filter(
      (plant) => plant.id !== plantToRemove.id
    );
    setFavoritePlantsState(updatedFavorites);
  }
  return (
    <>
      <h1>My Favorite Plants </h1>
      <ul>
        {favoritePlants.map((plant) => (
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
            <button onClick={(event) => removeFromFavorites(plant)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
