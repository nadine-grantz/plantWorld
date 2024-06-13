import React, { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

const StyledForm = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #f4f4f9;
  width: 100%;
  color: #333;
  font-family: "Open Sans", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  color: #555;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  border: none;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: #013220;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #8b0000;
    transform: translateY(-2px);
  }
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: green;
  margin-top: 1rem;
`;

export default function AddOwnPlant({ plants, setPlantsState }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const defaultPlantImages = [
    "https://www.feey-pflanzen.de/cdn/shop/files/Caladiumrosebudaction_720x.jpg?v=1714744666",
    "https://www.feey-pflanzen.de/cdn/shop/files/CaladiumrosebudWohnzimmer_720x.jpg?v=1717149002",
    "https://www.feey-pflanzen.de/cdn/shop/files/Caladiummissmuffetaction_720x.jpg?v=1714744802",
    "https://www.feey-pflanzen.de/cdn/shop/files/BabytrioCaladium_PurpleLight_action_1800x1800.jpg?v=1714744911",
    "https://www.feey-pflanzen.de/cdn/shop/files/Baby-Caladium-_Purple-Light_-cermer_1800x1800.gif?v=1717148770",
  ];

  function createNewSlugForOwnPlant(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPlant = Object.fromEntries(formData);

    if (!newPlant.picture) {
      const randomIndex = Math.floor(Math.random() * defaultPlantImages.length);
      newPlant.picture = defaultPlantImages[randomIndex];
    }

    const slug = createNewSlugForOwnPlant(newPlant.title);
    setPlantsState([...plants, { id: uid(), ...newPlant, slug }]);
    setShowSuccess(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <StyledHeading>Add my own Plant</StyledHeading>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="title">Plant-Name</StyledLabel>
          <StyledInput
            type="text"
            id="title"
            name="title"
            required
            placeholder="Plant's name"
          />

          <div>
            <input type="radio" id="level" name="level" required></input>
            <StyledLabel htmlFor="level">Beginner</StyledLabel>
            <input type="radio" id="level" name="level" required></input>
            <StyledLabel htmlFor="level">Intermediate</StyledLabel>
            <input type="radio" id="level" name="level" required></input>
            <StyledLabel htmlFor="level">advanced</StyledLabel>
          </div>

          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledInput
            type="text"
            id="description"
            name="description"
            placeholder="Description"
          />

          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />

          <StyledLabel htmlFor="watering">Watering Plants</StyledLabel>
          <StyledInput
            type="text"
            id="watering"
            name="watering"
            placeholder="Watering Plants"
          />

          <StyledLabel htmlFor="care">Care</StyledLabel>
          <StyledInput type="text" id="care" name="care" placeholder="Care" />

          <StyledLabel htmlFor="picture">Picture</StyledLabel>
          <StyledInput
            type="link"
            id="picture"
            name="picture"
            placeholder="Picture"
          />

          <StyledButton type="submit">Save Plant</StyledButton>
          <StyledButton type="button">Cancel</StyledButton>
        </StyledForm>
        {showSuccess && (
          <SuccessMessage>Plant successfully added!</SuccessMessage>
        )}
      </Wrapper>
    </>
  );
}
