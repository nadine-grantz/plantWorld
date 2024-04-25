import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  width: 100%;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLi = styled.li`
  margin: 0 10px;
`;

export default function HorizontalNavigation() {
  return (
    <NavContainer>
      <MenuList>
        <StyledLi>
          <Link href="/">Home</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/add-own-plant">Add Own Plant</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/my-favorite-plants">Favorite Plant</Link>
        </StyledLi>
      </MenuList>
    </NavContainer>
  );
}
