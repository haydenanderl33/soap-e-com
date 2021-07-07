import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 84px;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: #a1cdf4;
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
  font-family: 'Kaushan Script', cursive;
`;
export const HeaderColumn3 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
`;
export const MobileWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  font-size: 24px;
  padding: 0 24px;

  @media screen and (min-width: 800px) {
    display: none;
  }

`
export const MobileColumn1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Kaushan Script', cursive;

`
export const MobileColumn2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

`