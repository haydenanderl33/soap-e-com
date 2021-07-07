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
  Landing2Col5

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
      <LandingContainer2>
        <Landing2Col1>Lemonhive</Landing2Col1>
        <Landing2Col2>Cliffex</Landing2Col2>
        <Landing2Col3>Mount Co.</Landing2Col3>
        <Landing2Col4>Mermaidwood</Landing2Col4>
        <Landing2Col5>Tulipforce</Landing2Col5>
      </LandingContainer2>

    </>
  );
};

export default Landing;
