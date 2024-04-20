import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PlantCard = styled.li`
  position: relative;
  border-radius: 5px;
  height: fit-content;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const StyledImageContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  filter: brightness(70%);
`;

const StyledButton = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  color: green;
  z-index: 2;
`;

const StyledCardTitle = styled.h2`
  position: absolute;
  bottom: 60px;
  left: 10px;
  color: white;
  margin: 0;
`;

const Container = styled.div`
  position: relative;
`;

const PlantLevel = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;

  color: black;

  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const PlantLocation = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;

  color: black;

  position: absolute;
  bottom: 10px;
  right: 50%;
`;

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

  return (
    <>
      <h1>Welcome to your plantWorld</h1>
      <StyledList>
        {plants.map((plant) => (
          <PlantCard key={plant.id}>
            <Link href={`/plant-details/${plant.slug}`}>
              <Container>
                <StyledImageContainer>
                  <StyledImage src={plant.picture} alt={plant.title} />
                </StyledImageContainer>
                <StyledCardTitle>{plant.title}</StyledCardTitle>
                <PlantLevel>{plant.level}</PlantLevel>
                <PlantLocation>{plant.place}</PlantLocation>
              </Container>
            </Link>
            <StyledButton
              disabled={isPlantInFavoritePlants(plant)}
              onClick={(event) => handleAddFavoritePlant(plant)}
            >
              Favorite
            </StyledButton>
          </PlantCard>
        ))}
      </StyledList>
    </>
  );
}
