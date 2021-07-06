import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 84px;
  width: 100%;
  position: fixed;
  background: #a1cdf4;
  z-index: 99;
`;
export const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 800px) {
  display: none;
  }
`;
export const HeaderColumn1 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;

`;
export const HeaderColumn2 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 48px;
  font-family: 'Cookie', cursive;
`;
export const HeaderColumn3 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
`;
export const HeaderMobileWrapper = styled.div`
    height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 800px) {
  display: none;
  }
`;
export const MobileColumn1 = styled.div`
font-size: 24px;
color: #fff;
display: flex;
justify-content: flex-start;
align-items:center;
padding: 0 48px;
`;
export const MobileColumn2 = styled.div`
font-size: 24px;
color: #fff;
display: flex;
justify-content: flex-end;
align-items:center;
padding: 0 48px;
`;
