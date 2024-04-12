import React from "react";
import Link from "next/link";

export default function Homepage({
  plants,
  setFavoritePlantsState,
  favoritePlants,
}) {
  function isPlantInFavoritePlants(plant) {
    const isAlreadyFavorite = favoritePlants.some(
      (favorite) => favorite.id === plant.id
    );
    return isAlreadyFavorite;
  }

  function handleAddFavoritePlant(maybeFavPlant) {
    const isAlreadyFavorite = isPlantInFavoritePlants(maybeFavPlant);

    if (!isAlreadyFavorite) {
      setFavoritePlantsState([...favoritePlants, maybeFavPlant]);
    }
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
            <button
              disabled={isPlantInFavoritePlants(plant)}
              onClick={(event) => handleAddFavoritePlant(plant)}
            >
              Favorite
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// zweite Variante
// const isAlreadyFavorite = favoritePlants.some(
//   (plant) => plant.id === fav.id
// );
//   if (!isAlreadyFavorite) {
//     setFavoritePlants([...favoritePlants, fav]);
//   } else {
//     alert("You already added me to Favorite Plants!");
//   }
