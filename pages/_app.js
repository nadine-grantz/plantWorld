import { useState } from "react";
import Navigation from "@/components/Navigation";
import plantsData from "../lib/plants.json";
import GlobalStyles from "@/styles";

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
      <GlobalStyles />
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
