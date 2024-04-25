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
  @media screen and (max-width: 800px) {
    display: flex;
    list-style: none;
  }
`;

const StyledLi = styled.li`
  list-style: none;
`;

const ChangeBar1 = styled(Bar)`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translate(0, 11px) rotate(-45deg)" : "none"};
 
  }
`;

const ChangeBar2 = styled(Bar)`
  opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
 
  }
`;

const ChangeBar3 = styled(Bar)`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translate(0, -11px) rotate(45deg)" : "none"};

  }
`;

export default function BurgerNavigation() {
  const [isNavigationVisible, setVisibleNavigation] = useState(false);

  function toggleNavigation() {
    setVisibleNavigation(!isNavigationVisible);
  }

  function handleLinkClick() {
    setVisibleNavigation(false);
  }

  return (
    <>
      <nav>
        <Container onClick={toggleNavigation}>
          <ChangeBar1 $isOpen={isNavigationVisible} />
          <ChangeBar2 $isOpen={isNavigationVisible} />
          <ChangeBar3 $isOpen={isNavigationVisible} />
        </Container>
        {isNavigationVisible && (
          <StyledUl>
            <StyledLi>
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </StyledLi>

            <StyledLi>
              <Link href="/add-own-plant" onClick={handleLinkClick}>
                Add my own Plant
              </Link>
            </StyledLi>

            <StyledLi>
              <Link href="/my-favorite-plants" onClick={handleLinkClick}>
                My favorite Plant
              </Link>
            </StyledLi>
          </StyledUl>
        )}
      </nav>
    </>
  );
}
