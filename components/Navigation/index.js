import styled from "styled-components";
import BurgerNavigation from "./burgerNavigation";
import HorizontalNavigation from "./horizontalNavigation";

const DesktopNavbar = styled(BurgerNavigation)`
  @media screen and (max-width: 499px) {
    display: none;
  }
`;

const MobileNavbar = styled(HorizontalNavigation)`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default function ResponsiveNavigation() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}
