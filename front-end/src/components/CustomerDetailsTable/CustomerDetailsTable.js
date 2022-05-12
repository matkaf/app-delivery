import styled from 'styled-components';

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  margin: 20px 0;
  border: 2px solid rgb(192,192,192);
  box-shadow: 0 3px rgb(192,192,192);
  padding: 10px;

  tr {
    border: 1px solid black;
    border-radius: 5px;
    -moz-border-radius: 5px;
    padding: 5px;
  }
  th {
    font-size:15px;
    padding-left:10px;
    border-collapse: collapse; 
  }
  td {
    text-align:center;
    font-weight: bold;
    height:50px;
    padding:10px;
    border-collapse: collapse;
  }
`;

const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#036B52;
  border-radius:10px;
  color:white;
  font-size: 30px;
  font-weight:900;
  width:300px;
  height:70px;
`;

const TdItem = styled.td`
  background-color: #2FC18C;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width:50px;
`;

const TdDescricao = styled.td`
  background-color: #E5E5E5;
  width:600px;
  font-weight: normal;
`;

const TdQuantidade = styled.td`
  background-color: #036B52;
  color:white;
  width:100px;
`;

const TdValorUnitario = styled.td`
  background-color: #421981;
  width:150px;
  color:white;
  text-align:left;
`;

const TdSubTotal = styled.td`
  background-color: #056CF9;
  color:white;
`;

export { Table, TdItem, TdDescricao,
  TdQuantidade, TdValorUnitario, TdSubTotal, Div };
