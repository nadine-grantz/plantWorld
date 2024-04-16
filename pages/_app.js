// import GlobalStyle from "../styles";
import { useState } from "react";
import Navigation from "@/components/Navigation/navigation";
import plants from "../lib/plants.json";

export default function App({ Component, pageProps }) {
  const [favoritePlants, setFavoritePlants] = useState([]);

  function setFavoritePlantsState(newFavorites) {
    setFavoritePlants(newFavorites);
  }

  function removeFromFavorites(plantToRemove) {
    const updatedFavorites = favoritePlants.filter(
      (plant) => plant.id !== plantToRemove.id
    );
  }
  return (
    <>
      <Navigation />
      <Component
        {...pageProps}
        plants={plants}
        setFavoritePlantsState={setFavoritePlantsState}
        favoritePlants={favoritePlants}
      />
    </>
  );
}
