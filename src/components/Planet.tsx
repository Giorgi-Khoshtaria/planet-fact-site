import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { defaultTheme } from "./utils/defaulTheme";
import backgroundImage from "../../public/assets/background-stars.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isactive: boolean;
  color: string;
}

type PlanetName =
  | "Mercury"
  | "Venus"
  | "Earth"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune";

function Planet() {
  const { planetName } = useParams<{ planetName?: PlanetName }>(); // Allow planetName to be undefined
  const planet = data.find((planet) => planet.name === planetName);
  const [selectedSection, setSelectedSection] = useState("overview");

  const getImageSrc = () => {
    if (!planet) return "";
    if (selectedSection === "structure") {
      return planet.images.internal;
    }
    return planet.images.planet;
  };

  const getContent = () => {
    if (!planet) return "";
    if (selectedSection === "structure") {
      return planet.structure.content;
    } else if (selectedSection === "geology") {
      return planet.geology.content;
    }
    return planet.overview.content;
  };

  const getSource = () => {
    if (!planet) return "";
    if (selectedSection === "structure") {
      return planet.structure.source;
    } else if (selectedSection === "geology") {
      return planet.geology.source;
    }
    return planet.overview.source;
  };

  const getColor = () => {
    if (!planetName) return defaultTheme.colors.black; // Fallback color
    const capitalizedPlanetName =
      planetName.charAt(0).toUpperCase() + planetName.slice(1);
    return defaultTheme.colors.active[capitalizedPlanetName as PlanetName];
  };

  return (
    <ContentWrapper>
      <Container>
        <div>
          <MainImage src={getImageSrc()} alt={planet?.name || "Planet"} />
          {selectedSection === "geology" && (
            <GeologyImage src={planet?.images.geology} alt="Geology" />
          )}
        </div>
        <div>
          <div>
            <Title>{planet?.name || "Unknown Planet"}</Title>
            <Content>{getContent()}</Content>
            <Source>
              <p>
                Source:{" "}
                <a href={getSource()} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                </a>
              </p>
            </Source>
          </div>
          <Buttons color={getColor()}>
            <Button
              isactive={selectedSection === "overview"}
              onClick={() => setSelectedSection("overview")}
              color={getColor()}
            >
              01 <span>OVERVIEW</span>
            </Button>
            <Button
              isactive={selectedSection === "structure"}
              onClick={() => setSelectedSection("structure")}
              color={getColor()}
            >
              02 <span>Internal Structure</span>
            </Button>
            <Button
              isactive={selectedSection === "geology"}
              onClick={() => setSelectedSection("geology")}
              color={getColor()}
            >
              03 <span>Surface Geology</span>
            </Button>
          </Buttons>
        </div>
      </Container>
      <InformationWrapper>
        <Info>
          <h2>ROTATION TIME</h2>
          <p>{planet?.rotation || "N/A"}</p>
        </Info>
        <Info>
          <h2>REVOLUTION TIME</h2>
          <p>{planet?.revolution || "N/A"}</p>
        </Info>
        <Info>
          <h2>RADIUS</h2>
          <p>{planet?.radius || "N/A"}</p>
        </Info>
        <Info>
          <h2>AVERAGE TEMP.</h2>
          <p>{planet?.temperature || "N/A"}</p>
        </Info>
      </InformationWrapper>
    </ContentWrapper>
  );
}

export default Planet;

const ContentWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
`;

const MainImage = styled.img`
  width: 350px;
  position: relative;
`;

const GeologyImage = styled.img`
  width: 150px;
  position: absolute;
  top: 350px;
  left: 25%;
  transform: translateX(-50%);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  position: relative;
`;

const Title = styled.h1`
  font-family: ${defaultTheme.fonts.antonio};
  font-size: 80px;
  font-weight: 400;
  line-height: 103.25px;
  color: ${defaultTheme.colors.white};
`;

const Content = styled.p`
  width: 350px;
  font-family: ${defaultTheme.fonts.spartan};
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  color: ${defaultTheme.colors.white};
  margin-top: 20px;
`;

const Source = styled.div`
  margin: 20px 0;
  p {
    font-family: ${defaultTheme.fonts.spartan};
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    color: ${defaultTheme.colors.grey};
    a {
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      color: ${defaultTheme.colors.grey};
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 10px;
`;

const Button = styled.button<ButtonProps>`
  font-family: ${defaultTheme.fonts.spartan};
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2.5714285373687744px;
  text-align: left;
  padding: 15px;
  background-color: ${(props) =>
    props.isactive ? props.color : defaultTheme.colors.black};
  color: ${defaultTheme.colors.white};
  border: none;
  border: 1px solid ${defaultTheme.colors.white};
  ${({ isactive }) =>
    !isactive &&
    `
    &:hover {
      background-color: ${defaultTheme.colors.darkgrey};
    }
  `}
  span {
    margin-left: 15px;
  }
`;
const InformationWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 255px;
  height: 128px;
  border: 1px solid ${defaultTheme.colors.white};
  padding: 15px;
  h2 {
    font-family: ${defaultTheme.fonts.spartan};
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: left;
    color: ${defaultTheme.colors.grey};
  }
  p {
    font-family: ${defaultTheme.fonts.antonio};
    font-size: 40px;
    font-weight: 400;
    line-height: 51.76px;
    letter-spacing: -1.5px;
    text-align: left;
    color: ${defaultTheme.colors.white};
  }
`;
