import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const LandingContainer1 = styled.div`
  display: flex;
  height: 608px;
  width: 100%;
`;
export const LandingImageBackground1 = styled.img`
  position: relative;
  padding-top: 84px;
  z-index: -3;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const LandingWrapper1 = styled.div`
  position: absolute;
  padding-top: 84px;
  height: 608px;
  width: 100%;
  z-index: 0;
  /* padding-top: 64px; */
  background-color: rgba(0, 0, 0, 0.33);
  padding-left: 12%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;
export const Landing1Row1 = styled.div`
  height: 100%;
  width: 224px;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Landing1Row2 = styled.div`
  height: 100%;
  width: 108px;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Landing1Row3 = styled(LinkRoute)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 224px;
  color: #fff;
  background: #7c809b;
  border: 1px solid #fff;
`;
export const LandingContainer2 = styled.div`
  height: 264px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 24px;
  color: #000;
  font: bold;
  padding: 0 48px;

  @media screen and (max-width: 800px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: none;
    padding: 0;
  }
`;
export const Landing2Col1 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Goldman", cursive;
`;
export const Landing2Col2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Notable", sans-serif;
`;
export const Landing2Col3 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Landing2Col4 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Crafty Girls", cursive;
`;
export const Landing2Col5 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Englebert", sans-serif;
`;
