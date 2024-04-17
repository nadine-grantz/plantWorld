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

  function setPlantsState(newOwnPlant) {
    setPlants(newOwnPlant);
  }

  return (
    <>
      <Navigation />
      <Component
        {...pageProps}
        plants={plants}
        setFavoritePlantsState={setFavoritePlantsState}
        favoritePlants={favoritePlants}
        setPlantsState={setPlantsState}
      />
    </>
  );
}
