import { useState } from "react";
import styled from "styled-components";

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
        <button onClick={toggleNavigation}>Navigation</button>
        {isNavigationVisible && (
          <ul>
            <li>
              <a href="/" onClick={handleLinkClick}>
                Home
              </a>
            </li>

            <li>
              <a href="/add-own-plant" onClick={handleLinkClick}>
                AddOwnPlants
              </a>
            </li>

            <li>
              <a href="/my-plants" onClick={handleLinkClick}>
                My Plants
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
