import React from "react";
import {
  LandingContainer1,
  LandingWrapper1,
  LandingImageBackgroundWrapper1,
  LandingImageBackground1,
  Landing1Row1,
  Landing1Row2,
  Landing1Row3,
  LandingContainer2,
  Landing2Row1,
  Landing2Row2,
  Landing2Row3,
  Landing2Row4,
  Landing2Row5,
  LandingContainer3,
  Landing3Wrapper1,
  Landing3Row1,
  Landing3Row2,
  Landing3Wrapper2,
  Landing3Row3,
  ImageWrapper,
  Image,
} from "./landing-elements";

const Landing = () => {
  return (
    <>
      <LandingContainer1>
        <LandingImageBackgroundWrapper1>
          <LandingImageBackground1
            src={
              process.env.PUBLIC_URL + "/images/LandingPageSoapBackground.jpg"
            }
          />
        </LandingImageBackgroundWrapper1>

        <LandingWrapper1>
          <Landing1Row1>Organic Soap cut just for you.</Landing1Row1>
          <Landing1Row2>100% Natural Ingredients</Landing1Row2>
          <Landing1Row3>Shop</Landing1Row3>
        </LandingWrapper1>
      </LandingContainer1>
      <LandingContainer2>
        <Landing2Row1>Hessell and Sons</Landing2Row1>
        <Landing2Row2>Sawayn Group</Landing2Row2>
        <Landing2Row3>Rutherford Solutions</Landing2Row3>
        <Landing2Row4>Hahn Ltd</Landing2Row4>
        <Landing2Row5>Gerhold LLC</Landing2Row5>
      </LandingContainer2>
      <LandingContainer3>

      </LandingContainer3>
    </>
  );
};

export default Landing;
