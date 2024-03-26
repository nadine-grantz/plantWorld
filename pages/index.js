import styled from "styled-components";
import plants from "../lib/plants.json";
import PlantList from "@/components/Forms/PlantList.js";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 0.7rem 1rem;
  border-radius: 99rem;
  text-transform: uppercase;
`;

export default function Homepage() {
  return (
    <>
      <h1>PlantWorld</h1>
      <StyledForm>
        <label htmlFor="title">Plant-Name </label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description </label>
        <input type="text" id="description" name="description" />

        <label htmlFor="location">Location </label>
        <input type="text" id="location" name="location" />

        <label htmlFor="watering">Watering Plants </label>
        <input type="text" id="watering" name="watering" />

        <label htmlFor="care">Care </label>
        <input type="text" id="care" name="care" />

        <label htmlFor="picture">Picture </label>
        <input type="link" id="picture" name="picture" />

        <StyledButton type="submit">Save Plant</StyledButton>
        <StyledButton type="button">Cancel</StyledButton>
      </StyledForm>

      <>
        <h2>Initial Plants</h2>
        <PlantList plants={plants} />
      </>
    </>
  );
}
