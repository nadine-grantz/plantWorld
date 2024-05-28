import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTint,
  faHandsHelping,
  faHome,
  faLevelUpAlt,
  faSun,
  faLeaf,
  faSeedling,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
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

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
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
      <Image src={picture} alt={title} />
    </Container>
  );
}
