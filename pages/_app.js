import { useState } from "react";
import Navigation from "@/components/Navigation/navigation";
import plantsData from "../lib/plants.json";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(plantsData);
  const [favoritePlants, setFavoritePlants] = useState([]);

  function setFavoritePlantsState(newFavorites) {
    setFavoritePlants(newFavorites);
  }

  function addNewPlant(newPlant) {
    const newPlantWithId = { ...newPlant, id: uid() };
    setPlants([newPlantWithId, ...plants]);
    console.log("meine neue pflanze: ", newPlantWithId);
  }

  return (
    <>
      <Navigation />
      <Component
        {...pageProps}
        plants={plants}
        setFavoritePlantsState={setFavoritePlantsState}
        favoritePlants={favoritePlants}
        onAddNewPlant={addNewPlant}
      />
    </>
  );
}
