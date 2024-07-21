// import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "./utils/defaulTheme";

const navigation: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
function Header() {
  return (
    <Container>
      <Title>THE PLANETS</Title>
      <nav>
        <Ul>
          {navigation.map((planet) => {
            return (
              <Li key={planet}>
                <Link to={planet}>{planet}</Link>
              </Li>
            );
          })}
        </Ul>
      </nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.05px;
  font-family: ${defaultTheme.fonts.antonio};
  color: ${defaultTheme.colors.white};
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  /* li {
    text-decoration: none;
    color: ${defaultTheme.colors.white};
  } */
`;

const Li = styled.li`
  list-style-type: none;

  a {
    font-family: ${defaultTheme.fonts.spartan};
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-decoration: none;
    color: ${defaultTheme.colors.white};
  }
`;
