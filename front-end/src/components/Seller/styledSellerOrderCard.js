import styled, { css } from 'styled-components';

export const OrderCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0px;
  height: 12vh;
  width: 90vw;
  border-radius: 12px;
  background-color: grey;
`;

export const OrderCategory = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  font-size: 14px;

  ${(props) => {
    if (props.address) {
      return css`
        p {
          font-size: 12px;
          overflow-y: auto;
        }`;
    }

    if (props.status) { // TODO: Status diferentes
      return css`
        p {
          background: green;
          border-radius: 10px;
          padding: 5px 10px;
        }
      `;
    }
  }

}
`;
