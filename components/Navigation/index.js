import styled from "styled-components";
import BurgerNavigation from "./burgerNavigation";
import HorizontalNavigation from "./horizontalNavigation";

const DesktopNavbar = styled.BurgerNavigation`
  display: flex;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileNavbar = styled.HorizontalNavigation`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

export default function ResponsiveNavigation() {
  return (
    <>
      <MobileNavbar>
        <HorizontalNavigation />
      </MobileNavbar>
      <DesktopNavbar>
        <BurgerNavigation />
      </DesktopNavbar>
    </>
  );
}
