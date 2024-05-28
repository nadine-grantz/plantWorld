import styled from "styled-components";
import BurgerNavigation from "./burgerNavigation";
import HorizontalNavigation from "./horizontalNavigation";

const MobileNavbar = styled(BurgerNavigation)`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const DesktopNavbar = styled(HorizontalNavigation)`
  @media screen and (max-width: 499px) {
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
