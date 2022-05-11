import * as mui from '@mui/material';

import React from 'react'

function Loading() {
  return (
    <mui.Container
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      } }
    >
    <mui.CircularProgress color="success" />
    </mui.Container>
  )
}

export default Loading;
