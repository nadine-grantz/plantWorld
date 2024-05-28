import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1000;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
`;

export default function HorizontalNavigation({ className }) {
  return (
    <NavContainer className={className}>
      <MenuList>
        <StyledLi>
          <StyledLink href="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/add-own-plant">Add Own Plant</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="/my-favorite-plants">Favorite Plant</StyledLink>
        </StyledLi>
      </MenuList>
    </NavContainer>
  );
}
