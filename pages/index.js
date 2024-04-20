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
  width: 60%;
  height: auto;
  border-radius: 5px;
  filter: brightness(70%);
`;

const StyledButton = styled.button`
  position: absolute;
  top: 5%;
  left: 30%;
  color: red;
  z-index: 2;
`;

const StyledCardTitle = styled.h2`
  position: absolute;
  bottom: 20%;
  left: 3%;
  color: white;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PlantLevel = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: black;
  font-weight: 500;
  position: absolute;
  bottom: 90%;
  left: 3%;
`;

const PlantLocation = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  color: black;
  font-weight: 500;
  position: absolute;
  bottom: 90%;
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
              <StyledImageContainer>
                <StyledImage
                  src={plant.picture}
                  width={100}
                  height={100}
                  alt={plant.title}
                />
              </StyledImageContainer>
              <StyledButton
                disabled={isPlantInFavoritePlants(plant)}
                onClick={(event) => handleAddFavoritePlant(plant)}
              >
                Favorite
              </StyledButton>
              <StyledCardTitle>{plant.title}</StyledCardTitle>
              <Container>
                <div>
                  <div>
                    <PlantLevel>{plant.level}</PlantLevel>
                    <PlantLocation>{plant.place}</PlantLocation>
                  </div>
                </div>
              </Container>
            </Link>
          </PlantCard>
        ))}
      </StyledList>
    </>
  );
}
