import React from 'react';

import Container from '@mui/material/Container';

import ShopDirectory from '../pages/ShopDirectory';
import DirectoryLayout from './DirectoryLayout';

export default function DirectoryContainer() {
  return (
    <div style={{minHeight: "100vp", position: "relative"}}>
      {/* <ShopDirectory /> */}
      <Container maxWidth="xl">
        <DirectoryLayout />
      </Container>
    </div>
  )
}