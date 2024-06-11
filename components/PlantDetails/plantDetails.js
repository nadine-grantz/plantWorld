import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faHome,
  faSun,
  faLeaf,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Details = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
  color: #555;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #00796b;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 60%;
  }
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
    <Container>
      <Title>{title}</Title>
      <ContentWrapper>
        <Details>
          <List>
            <ListItem>
              <Icon icon={faSun} /> {location}
            </ListItem>
            <ListItem>
              <Icon icon={faTint} /> {watering}
            </ListItem>
            <ListItem>
              <Icon icon={faLeaf} /> {care}
            </ListItem>
            <ListItem>
              <Icon icon={faHome} /> {place}
            </ListItem>
            <ListItem>
              <Icon icon={faChartLine} /> {level}
            </ListItem>
            <ListItem>{description}</ListItem>
          </List>
        </Details>
        <ImageWrapper>
          <Image src={picture} alt={title} />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
}
