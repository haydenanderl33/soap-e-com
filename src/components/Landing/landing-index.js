import React from "react";
import {
  LandingContainer1,
  LandingImageBackground1,
  LandingWrapper1,
  Landing1Row1,
  Landing1Row2,
  Landing1Row3

} from "./landing-elements";

const Landing = () => {
  return (
    <>
      <LandingContainer1>
        <LandingImageBackground1
          src={process.env.PUBLIC_URL + "/images/LandingPageSoapBackground.jpg"}/>
        <LandingWrapper1>
          <Landing1Row1>Hand Made Soap Cut just for you.</Landing1Row1>
          <Landing1Row2>100% Natural Ingredients</Landing1Row2>
          <Landing1Row3>Shop</Landing1Row3>
        </LandingWrapper1>
      </LandingContainer1>

    </>
  );
};

export default Landing;
