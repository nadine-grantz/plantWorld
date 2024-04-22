import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PlantCard = styled.li`
  position: relative;
  border-radius: 10px;
  height: fit-content;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
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
  font-weight:900;
  }
`;

const StyledCardTitle = styled.h2`
  margin: 5px;
  color: white;
  width: 100%;
  height: fit-content;
`;

const Container = styled.div`
  display: flex;
  align-content: space-between;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 12px;
  z-index: 1;
  gap: 5px;
  flex-wrap: wrap;
`;

const PlantInfo = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  color: grey;
`;

const PlantLevel = styled(PlantInfo)``;

const PlantLocation = styled(PlantInfo)``;

const DetailsLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  flex-wrap: nowrap;
  height: fit-content;
`;

const LevelLocation = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  height: fit-content;
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

  function onFavoriteButtonClick(event, plant) {
    event.preventDefault();
    handleAddFavoritePlant(plant);
  }

  return (
    <>
      <h1>Welcome to your plantWorld</h1>
      <StyledList>
        {plants.map((plant) => (
          <PlantCard key={plant.id}>
            <Link href={`/plant-details/${plant.slug}`}>
              <StyledImage src={plant.picture} alt={plant.title} />
              <Container>
                <DetailsLine>
                  <LevelLocation>
                    <PlantLevel>{plant.level}</PlantLevel>
                    <PlantLocation>{plant.place}</PlantLocation>
                  </LevelLocation>
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
      </StyledList>
    </>
  );
}
