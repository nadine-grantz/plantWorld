import styled from "styled-components";
import plants from "../lib/plants.json";
import PlantList from "@/components/Forms/PlantList.js";
import Link from "next/link";

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

export default function Homepage() {
  return (
    <>
      {/* <h1>Plants</h1>
      <ul>
        <Link href="/plant-details">Go to see some selected plants</Link>
        <img
          src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVufGVufDB8fDB8fHww"
          alt="" width={100} height={149}
        />
      </ul> */}

      <StyledHeading>PlantWorld</StyledHeading>
      <Wrapper>
        <StyledForm>
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

          <StyledButton type="submit">Save Plant</StyledButton>
          <StyledButton type="button">Cancel</StyledButton>
        </StyledForm>
      </Wrapper>

      <>
        <h2>Choose your Plants</h2>
        <PlantList plants={plants} />
      </>
    </>
  );
}
