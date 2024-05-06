import styled from "styled-components";
import { uid } from "uid";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  color: #6a6f8c;
  font-family: "Open Sans", sans-serif;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  color: #aaa;
`;

const StyledButton = styled.button`
  border: none;
  width: 100%;
  padding: 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ff6b81;
  color: green;
  transition: background-color 0.3s ease;
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #6a6f8c;
`;

const Wrapper = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
`;

export default function AddOwnPlant({ plants, setPlantsState }) {
  // Helper function, damit Leerzeichen ersetzt werden + lowercase
  function createNewSlugForOwnPlant(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPlant = Object.fromEntries(formData);
    // Title wird in Slug umgewandelt
    const slug = createNewSlugForOwnPlant(newPlant.title);
    // const plantWithSlug = { ...newPlant, slug };
    console.log("newPlant: ", newPlant);
    setPlantsState([...plants, { id: uid(), ...newPlant, slug }]);
    // setPlantsState([...plants, plantWithSlug]);
    // console.log("plants: ", plants);
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
            placeholder="Plants name"
          />

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
      </Wrapper>
    </>
  );
}
