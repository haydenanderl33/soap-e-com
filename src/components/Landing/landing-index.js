import React from "react";
import {
  LandingContainer1,
  LandingImageBackground1,
  LandingWrapper1,
  Landing1Row1,
  Landing1Row2,
  Landing1Row3,
  LandingContainer2,
  Landing2Col1,
  Landing2Col2,
  Landing2Col3,
  Landing2Col4,
  Landing2Col5,
  LandingContainer3,
  Landing3Row1,
  Landing3Row2,
  Landing3Row3,
  LandingContainer4,
  Landing4Wrapper,
  Landing4ColumnContainer,
  PurposePictureWrapper,
  PurposePicture,
  PurposeDescriptionWrapper,
  PurposeDescription,
} from "./landing-elements";

const Landing = () => {
  return (
    <>
      <LandingContainer1>
        <LandingImageBackground1
          src={process.env.PUBLIC_URL + "/images/LandingPageSoapBackground.jpg"}
        />
        <LandingWrapper1>
          <Landing1Row1>Hand Made Soap Cut just for you.</Landing1Row1>
          <Landing1Row2>100% Natural Ingredients</Landing1Row2>
          <Landing1Row3>Shop</Landing1Row3>
        </LandingWrapper1>
      </LandingContainer1>
      <LandingContainer2>
        <Landing2Col1>Lemonhive</Landing2Col1>
        <Landing2Col2>Cliffex</Landing2Col2>
        <Landing2Col3>Mount Co.</Landing2Col3>
        <Landing2Col4>Mermaidwood</Landing2Col4>
        <Landing2Col5>Tulipforce</Landing2Col5>
      </LandingContainer2>
      <LandingContainer3>
        <Landing3Row1>Fresh. Clean. Fragrant.</Landing3Row1>
        <Landing3Row2>
          We only use natural ingredients that nourish everyones skin.
        </Landing3Row2>
        <Landing3Row3>Shop by purpose :</Landing3Row3>
      </LandingContainer3>
      <LandingContainer4>
        <Landing4Wrapper>
          <Landing4ColumnContainer>
            <PurposePictureWrapper>
              <PurposePicture
                src={process.env.PUBLIC_URL + "/images/HandSoaps.jpg"}
              />
            </PurposePictureWrapper>
            <PurposeDescriptionWrapper>
              <PurposeDescription>Antibacterial Hand Soaps</PurposeDescription>
            </PurposeDescriptionWrapper>
          </Landing4ColumnContainer>
          <Landing4ColumnContainer>
            <PurposePictureWrapper>
              <PurposePicture
                src={process.env.PUBLIC_URL + "/images/BarSoaps.jpg"}
              />
            </PurposePictureWrapper>
            <PurposeDescriptionWrapper>
              <PurposeDescription>Bar Soaps</PurposeDescription>
            </PurposeDescriptionWrapper>
          </Landing4ColumnContainer>
          <Landing4ColumnContainer>
            <PurposePictureWrapper>
              <PurposePicture
                src={process.env.PUBLIC_URL + "/images/Shampoo.jpg"}
              />
            </PurposePictureWrapper>
            <PurposeDescriptionWrapper>
              <PurposeDescription>Natural Shampoos</PurposeDescription>
            </PurposeDescriptionWrapper>
          </Landing4ColumnContainer>
        </Landing4Wrapper>
      </LandingContainer4>
    </>
  );
};

export default Landing;
