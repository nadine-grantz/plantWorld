import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  //display: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    position: sticky;
    width: 100%;
  }
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
  @media screen and (max-width: 800px) {
    margin: 0 10px;
    list-style: none;
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

export default function Navigation() {
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

// import Link from "next/link";
// import styled from "styled-components";

// const NavContainer = styled.nav`
//   display: flex;
//   justify-content: center;
//   position: sticky;
//   width: 100%; /
// `;

// const MenuList = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const StyledLi = styled.li`
//   margin: 0 10px;
// `;

// export default function Navigation() {
//   return (
//     <NavContainer>
//       <MenuList>
//         <StyledLi>
//           <Link href="/">Home</Link>
//         </StyledLi>
//         <StyledLi>
//           <Link href="/add-own-plant">Add Own Plant</Link>
//         </StyledLi>
//         <StyledLi>
//           <Link href="/my-favorite-plants">Favorite Plant</Link>
//         </StyledLi>
//       </MenuList>
//     </NavContainer>
//   );
// }
