import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const LandingContainer1 = styled.div`
  display: flex;
  height: 512px;
  width: 100%;
`;
export const LandingImageBackground1 = styled.img`
  position: relative;
  z-index: -3;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const LandingWrapper1 = styled.div`
  position: absolute;
  height: 512px;
  width: 100%;
  z-index: 0;
  padding-top: 128px;
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
align-items: center;
`
export const Landing1Row2 = styled.div`
height: 100%;
width: 96px;
font-size: 20px;
color: #fff;

`
export const Landing1Row3 = styled(LinkRoute)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
height: 48px;
width: 224px;
color: #fff;
background:#7C809B ;
`