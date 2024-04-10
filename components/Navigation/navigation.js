import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
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
          <ul>
            <li>
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/add-own-plant" onClick={handleLinkClick}>
                Add my own Plant
              </Link>
            </li>

            <li>
              <Link href="/my-favorite-plants" onClick={handleLinkClick}>
                My favorite Plant
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
