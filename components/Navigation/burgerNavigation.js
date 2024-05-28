import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  cursor: pointer;
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 20px 0;
  z-index: 999;
`;

const StyledLi = styled.li`
  margin: 15px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #00796b;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`;

const ChangeBar1 = styled(Bar)`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translate(0, 11px) rotate(-45deg)" : "none"};
`;

const ChangeBar2 = styled(Bar)`
  opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
`;

const ChangeBar3 = styled(Bar)`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translate(0, -11px) rotate(45deg)" : "none"};
`;

export default function BurgerNavigation({ className }) {
  const [isNavigationVisible, setVisibleNavigation] = useState(false);

  function toggleNavigation() {
    setVisibleNavigation(!isNavigationVisible);
  }

  function handleLinkClick() {
    setVisibleNavigation(false);
  }

  return (
    <>
      <nav className={className}>
        <Container onClick={toggleNavigation}>
          <ChangeBar1 $isOpen={isNavigationVisible} />
          <ChangeBar2 $isOpen={isNavigationVisible} />
          <ChangeBar3 $isOpen={isNavigationVisible} />
        </Container>
        {isNavigationVisible && (
          <StyledUl>
            <StyledLi>
              <StyledLink href="/" onClick={handleLinkClick}>
                Home
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href="/add-own-plant" onClick={handleLinkClick}>
                Add my own Plant
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href="/my-favorite-plants" onClick={handleLinkClick}>
                My favorite Plant
              </StyledLink>
            </StyledLi>
          </StyledUl>
        )}
      </nav>
    </>
  );
}
