import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const PlantList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const PlantItem = styled.li`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
`;

const PlantTitle = styled.h2`
  font-size: 1.2em;
  color: #34495e;
  margin-bottom: 10px;
`;

const PlantImage = styled.img`
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

export default function MyFavoritePlants({
  favoritePlants,
  setFavoritePlantsState,
}) {
  function removeFromFavorites(plantToRemove) {
    const updatedFavorites = favoritePlants.filter(
      (plant) => plant.id !== plantToRemove.id
    );
    setFavoritePlantsState(updatedFavorites);
  }
  return (
    <Container>
      <Title>My Favorite Plants </Title>
      <PlantList>
        {favoritePlants.map((plant) => (
          <PlantItem key={plant.id}>
            <PlantTitle>{plant.title}</PlantTitle>
            <Link href={`/plant-details/${plant.slug}`}>
              <PlantImage
                src={plant.picture}
                width={100}
                height={149}
                alt={plant.title}
              />
            </Link>
            <RemoveButton onClick={(event) => removeFromFavorites(plant)}>
              <FontAwesomeIcon icon={faTrash} />
            </RemoveButton>
          </PlantItem>
        ))}
      </PlantList>
    </Container>
  );
}
