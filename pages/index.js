import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ProjectCard = styled.li`
  position: relative;
  border-radius: 5px;
  height: fit-content;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  text-align: right;
`;

const StyledCardTitle = styled.h2`
  margin: 0;
  color: white;
  // width: 100%;
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
          <ProjectCard key={plant.id}>
            <Link href={`/plant-details/${plant.slug}`}>
              <StyledImage
                src={plant.picture}
                width={100}
                height={100}
                alt={plant.title}
              />
            </Link>
            <Container>
              <StyledButton
                disabled={isPlantInFavoritePlants(plant)}
                onClick={(event) => handleAddFavoritePlant(plant)}
              >
                Favorite
              </StyledButton>
              <StyledCardTitle>{plant.title}</StyledCardTitle>
            </Container>
          </ProjectCard>
        ))}
      </StyledList>
    </>
  );
}
