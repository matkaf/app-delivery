import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header/Header';

//

function CustomerOrderDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <h2>{`some other shit and ${id}`}</h2>
    </>
  );
}

export default CustomerOrderDetails;

//  zebirita@email.com
//  $#zebirita#$
