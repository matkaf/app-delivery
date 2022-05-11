import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #036B52;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 20%;
`;

const LeftSection = styled.section`
  /* height: 6.7rem; */
  /* width: 15rem; */
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  /* height: 6.7rem; */
  /* width: 15rem; */
  display: flex;
  justify-content: center;

  :nth-child(1) {
    background: #421981;
  }
  :nth-child(2) {
    background: #056CF9;
  }
`;

export {
  StyledHeader,
  LeftSection,
  RightSection,
};
