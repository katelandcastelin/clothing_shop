import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
import ProductOptions from '../components/ProductOptions';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import { products } from '../utils/data';

export default function ProductPage() {

  const navigate = useNavigate();

  const {productId} = useParams();
  const product = products.find(prod => prod.name === productId);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Grid container>
        <ArrowBackIosNewOutlinedIcon fontSize="large" onClick={() => navigate(-1)} />
        <Grid style={{width: "50%"}}>
          <ProductDisplay />
          <Box>
            <Paper style={{padding: "10px 20px 10px 20px"}}>
              <Typography variant="subtitle1" fontSize="20px">Description</Typography>
              <Typography variant="subtitle2" fontSize="15px">{product.description}</Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid>
          <ProductOptions />
        </Grid>
      </Grid>
    </div>
  )
}