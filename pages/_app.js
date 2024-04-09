// import GlobalStyle from "../styles";
// import Navigation from "@/components/Navigation/navigation";
// import plants from "../lib/plants.json";
// // import useLocalStorageState from "use-local-storage-state";

// export default function App({ Component, pageProps }) {
//   function handleToogleFavoritePlant() {}

//   return (
//     <>
//       <GlobalStyle />
//       <Navigation />
//       <Component
//         {...pageProps}
//         plants={plants}
//         // handleToggleBookmark={handleToggleBookmark}
//       />
//     </>
//   );
// }

// ---------------------------------
// In _app.js
import React, { useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/navigation";
import plants from "../lib/plants.json";
import MyFavoritePlants from "./my-favorite-plants";

export default function App({ Component, pageProps }) {
  const [favoritePlants, setFavoritePlants] = useState([]);

  const handleToggleFavoritePlant = (plant) => {
    const index = favoritePlants.findIndex((p) => p.id === plant.id);
    if (index === -1) {
      setFavoritePlants([...favoritePlants, plant]);
    } else {
      const updatedFavorites = [...favoritePlants];
      updatedFavorites.splice(index, 1);
      setFavoritePlants(updatedFavorites);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component
        {...pageProps}
        plants={plants}
        handleToggleFavoritePlant={handleToggleFavoritePlant}
      />
      <MyFavoritePlants favoritePlants={favoritePlants} />
    </>
  );
}
