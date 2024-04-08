import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/navigation";
import plants from "../lib/plants.json";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [plantsInfo, setPlantsInfo] = useLocalStorageState("plantsInfo", []);

  // Überprüfe, ob plantsInfo undefined ist und setze es auf ein leeres Array, falls erforderlich
  if (typeof plantsInfo === "undefined") {
    setPlantsInfo([]);
  }

  function handleToggleBookmark(id) {
    const currentPlant = plantsInfo.find((plant) => plant.id === id);
    if (currentPlant) {
      setPlantsInfo(
        plantsInfo.map((plantInfo) =>
          plantInfo.id === id
            ? { ...plantInfo, isBookmarked: !plantInfo.isBookmarked }
            : plantInfo
        )
      );
    } else {
      setPlantsInfo([...plantsInfo, { id, isBookmarked: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component
        {...pageProps}
        plants={plants}
        handleToggleBookmark={handleToggleBookmark}
      />
    </>
  );
}
