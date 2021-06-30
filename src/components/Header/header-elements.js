import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 84px;
  width: 100%;
  position: fixed;
  background: #a1cdf4;
`;
export const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
