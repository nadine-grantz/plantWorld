import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-family: Moderne Sans, sans-serif;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  letter-spacing: 0.5rem;
  color: #0c140b;
  position: relative;
`;

const PlantCard = styled.li`
  position: relative;
  border-radius: 10px;
  height: fit-content;
  width: 100%;

  @media screen and (min-width: 500px) {
    width: calc(50% - 10px);
  }

  @media screen and (min-width: 1000px) {
    width: calc(30% - 10px);
  }
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
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
  border-radius: 5px;
  margin: 0;
  font-weight: 900;
  background-color: ${(props) => (props.isFavorite ? "#374725" : "#d36e70")};
  color: white;
`;

const StyledCardTitle = styled.h2`
  margin: 5px;
  color: white;
  width: 100%;
  height: fit-content;
`;

const Container = styled.div`
  display: grid;
  flex-wrap: wrap;
  align-content: space-between;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 12px;
  gap: 5px;
`;

const PlantInfo = styled.p`
  background: rgba(255, 255, 255, 0.6);
  max-width: 100px;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  color: grey;
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

export default function Homepage({
  plants,
  setFavoritePlantsState,
  favoritePlants,
}) {
  function isPlantInFavoritePlants(plant) {
    return favoritePlants.some((favorite) => favorite.id === plant.id);
  }

  function onFavoriteButtonClick(event, plant) {
    event.preventDefault();
    const isAlreadyFavorite = isPlantInFavoritePlants(plant);

    if (isAlreadyFavorite) {
      const updatedFavorites = favoritePlants.filter(
        (favorite) => favorite.id !== plant.id
      );
      setFavoritePlantsState(updatedFavorites);
    } else {
      setFavoritePlantsState([...favoritePlants, plant]);
    }
  }

  return (
    <>
      <StyledHeader>plantWorld</StyledHeader>
      <StyledList>
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
                    onClick={(event) => onFavoriteButtonClick(event, plant)}
                    isFavorite={isPlantInFavoritePlants(plant)}
                  >
                    {isPlantInFavoritePlants(plant) ? "Delete" : "Favorite"}
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
