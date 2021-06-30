import React from "react";
import {
  LandingContainer1,
  LandingWrapper1,
  LandingImageBackground1,
  Landing1Row1,
  Landing1Row2,
  Landing1Row3,
} from "./landing-elements";

const Landing = () => {
  return (
    <>
      <LandingContainer1>
        <LandingImageBackground1
          src={process.env.PUBLIC_URL + "/images/LandingPageSoapBackground.jpg"}
        />
        <LandingWrapper1>
          <Landing1Row1>potato</Landing1Row1>
          <Landing1Row2>potato</Landing1Row2>
          <Landing1Row3>potato</Landing1Row3>
        </LandingWrapper1>
      </LandingContainer1>
    </>
  );
};

export default Landing;
