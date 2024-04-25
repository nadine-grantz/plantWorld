import styled from "styled-components";

const PlantCard = styled.li`
  position: relative;
  border-radius: 10px;
  height: fit-content;
  width: 100%;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 150px;
  object-fit: cover;
  border-radius: 5px;
  filter: brightness(70%);
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

export default function PlantDetails({ plant }) {
  const {
    title,
    description,
    location,
    watering,
    care,
    picture,
    place,
    level,
  } = plant;

  return (
    <>
      <StyledList>
        <PlantCard>
          <StyledImage src={picture} alt={title} width={100} height={149} />
          <Container>
            <DetailsLine>
              <Label>
                <PlantLevelLabel>{level}</PlantLevelLabel>
                <PlantLocationLabel>{place}</PlantLocationLabel>
              </Label>
              <StyledCardTitle>{title}</StyledCardTitle>
            </DetailsLine>
          </Container>
          <li>{description}</li>
          <li>{location}</li>
          <li>{watering}</li>
          <li>{care}</li>
        </PlantCard>
      </StyledList>
    </>
  );
}
