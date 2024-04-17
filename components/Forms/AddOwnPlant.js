import styled from "styled-components";
import { uid } from "uid";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid green;
  border-radius: 5px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #007bff;
  color: white;
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 2rem;
  border: 1px solid gold;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default function AddOwnPlant({ plants, onAddNewPlant }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(FormData);

    onAddNewPlant([...plants, newPlant]); // Add the new plant to the existing list of plants
  }

  console.log("plants: ", plants);
  return (
    <>
      <StyledHeading>Add my own Plant</StyledHeading>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="title">Plant-Name</StyledLabel>
          <StyledInput type="text" id="title" name="title" required />

          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledInput type="text" id="description" name="description" />

          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput type="text" id="location" name="location" />

          <StyledLabel htmlFor="watering">Watering Plants</StyledLabel>
          <StyledInput type="text" id="watering" name="watering" />

          <StyledLabel htmlFor="care">Care</StyledLabel>
          <StyledInput type="text" id="care" name="care" />

          <StyledLabel htmlFor="picture">Picture</StyledLabel>
          <StyledInput type="link" id="picture" name="picture" />

          <StyledButton type="submit" onClick={handleSubmit}>
            Save Plant
          </StyledButton>
          <StyledButton type="button">Cancel</StyledButton>
        </StyledForm>
      </Wrapper>
    </>
  );
}
