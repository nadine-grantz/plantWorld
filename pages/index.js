import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Masonry from "@mui/lab/Masonry";

const StyledHeader = styled.h1`
  font-family: Moderne Sans, sans-serif;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  letter-spacing: 0.5rem;
  color: #0c140b;
`;

const PlantCard = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: calc(50% - 10px);
  }

  @media screen and (min-width: 900px) {
    width: calc(30%);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 150px;
  object-fit: cover;
  border-radius: 5px;
  filter: brightness(70%);
`;

const StyledButton = styled.button`
  border: none;
  max-width: 100px;
  background: #d36e70;
  border-radius: 5px;
  margin: 0;
  font-weight: 900;
`;

const StyledCardTitle = styled.h2`
  margin: 5px;
  color: white;
  width: 100%;
  height: fit-content;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 12px;
`;

const PlantInfo = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  color: grey;

  @media (max-width: 200px) {
    font-size: xx-small;
  }
  @media (max-width: 400px) {
    font-size: small;
  }
`;

const PlantLevelLabel = styled(PlantInfo)``;

const PlantLocationLabel = styled(PlantInfo)``;

const DetailsLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  height: fit-content;
`;

const Label = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

// const customBreakpoints = {
//   values: {
//     xs: 0,
//     sm: 300,
//     md: 600,
//     lg: 960,
//     xl: 1280,
//     custom: 1600,
//   },
// };
// const theme = createTheme({
//   breakpoints: customBreakpoints,
// });

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

  function onFavoriteButtonClick(event, plant) {
    event.preventDefault();
    handleAddFavoritePlant(plant);
  }

  return (
    <>
      <StyledHeader>plantWorld</StyledHeader>
      <StyledList>
        <Masonry>
          {plants.map((plant) => (
            <PlantCard key={plant.id}>
              <Link href={`/plant-details/${plant.slug}`}>
                <StyledImage src={plant.picture} alt={plant.title} />
                <Container>
                  <DetailsLine>
                    <Label>
                      <PlantLevelLabel>{plant.level}</PlantLevelLabel>
                      <PlantLocationLabel>{plant.place}</PlantLocationLabel>
                    </Label>
                    <StyledButton
                      disabled={isPlantInFavoritePlants(plant)}
                      onClick={(event) => onFavoriteButtonClick(event, plant)}
                    >
                      Favorite
                    </StyledButton>
                  </DetailsLine>
                  <StyledCardTitle>{plant.title}</StyledCardTitle>
                </Container>
              </Link>
            </PlantCard>
          ))}
        </Masonry>
      </StyledList>
    </>
  );
}
