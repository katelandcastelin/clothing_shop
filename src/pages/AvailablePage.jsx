import React from 'react';

import ShopDirectory from './ShopDirectory';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function CustomOrderPage() {
  return (
    <div>
      <ShopDirectory />
      <Grid2 container style={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h4" gutterBottom style={{display: "flex", justifyContent: "center"}}>
          Available
        </Typography>
      </Grid2>
    </div>
  )
}