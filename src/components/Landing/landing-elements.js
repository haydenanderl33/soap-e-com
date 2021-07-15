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
export const LandingContainer3 = styled.div`
  height: 448px;
  width: 100%;
  background: #ada9b7;
  @media screen and (max-width: 800px) {
    font-size: 24px;
    height: auto;
  }
`;
export const Landing3Row1 = styled.div`
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 128px;
  font: bold;
  color: #fff;
  @media screen and (max-width: 800px) {
    padding: 32px 0;
    font-size: 24px;
  }
`;
export const Landing3Row2 = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 32px 16px;
    font-size: 20px;
  }
`;
export const Landing3Row3 = styled.div`
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;
  
  color: #fff;
  
  @media screen and (max-width: 800px) {
    padding: 32px 16px;
    font-size: 20px;
  }
`;
export const LandingContainer4 = styled.div`
  height: 512px;
  width: 100%;
  background: #ada9b7;
  color: #000;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
export const Landing4Wrapper = styled.div`
  height: 100%;
  width: 512px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 24px;

  @media screen and (max-width: 800px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
    padding: 0 24px;
    
  }
`;
export const Landing4ColumnContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 0.5fr);
  

`;
export const PurposePictureWrapper = styled.div`
  height: 224px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const PurposePicture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const PurposeDescriptionWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
`;
export const PurposeDescription = styled(LinkRoute)`
text-align: center;
color: #fff;

`;
