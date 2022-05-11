import styled from 'styled-components';

const Nav = styled.header`
  background-color: #046c54;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.7rem;

  div{
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
  }
`;

const DivL = styled.button`
  height: 6.7rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivR = styled.button`
  height: 6.7rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :nth-child(1) {
    background: #421981;
  }
  :nth-child(2) {
    background: #056CF9;
  }
`;

export { Nav, DivL, DivR };
