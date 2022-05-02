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
  }
`;

const Div = styled.div`
  height: 6.7rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  &:active{
    background: #2FC18C;
  }
`;

export { Nav, Div };
