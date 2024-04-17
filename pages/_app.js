import { useState } from "react";
import Navigation from "@/components/Navigation/navigation";
import plantsData from "../lib/plants.json";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(plantsData);
  const [favoritePlants, setFavoritePlants] = useState([]);

  function setFavoritePlantsState(newFavorites) {
    setFavoritePlants(newFavorites);
  }

  function setPlantsState(plant) {
    setPlants(plant);
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
