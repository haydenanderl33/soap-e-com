import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const LandingContainer1 = styled.div`
  height: 745px;
  position: relative;
`;
export const LandingImageBackgroundWrapper1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const LandingImageBackground1 = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #7a82ab;
`;
export const LandingWrapper1 = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: grid;
  padding-top: 128px;
  padding-left: 12%;
  grid-template-rows: repeat(4, 1fr);
  color: #92dce5;


`;

export const Landing1Row1 = styled.div`
  width: 224px;
  height: 100%;
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    width: 160px;
  }
`;
export const Landing1Row2 = styled.div`
  width: 224px;
  height: 100%;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    width: 128px;
  }
`;
export const Landing1Row3 = styled(LinkRoute)`
height: 48px;
width: 224px;
color: #fff;
background: #7C809B  ;
font-size: 20px;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #fff;
`;
export const LandingContainer2 = styled.div`
  height: 224px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 24px;
  @media screen and (max-width: 800px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: none;
  }
`;
export const Landing2Row1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Sriracha", cursive;
  font-weight: bold;
`;
export const Landing2Row2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bad Script", cursive;
  font-weight: bold;
`;
export const Landing2Row3 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lateef", cursive;
  font-weight: bold;
`;
export const Landing2Row4 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Just Another Hand", cursive;
  font-weight: bold;
`;
export const Landing2Row5 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mansalva", cursive;
  font-weight: bold;
`;
export const LandingContainer3 = styled.div`
  height: 512px;
  width: 100%;
`;
