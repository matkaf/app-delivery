const convertToBRL = (value) => value.toLocaleString('pt-br',
  { style: 'currency', currency: 'BRL' });

export default convertToBRL;
