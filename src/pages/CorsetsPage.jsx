import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter, useParams } from 'react-router-dom';

import { products } from '../utils/data';

import Grid2 from '@mui/material/Unstable_Grid2';

import ProductCard from '../components/ProductCard';

import ShopDirectory from './ShopDirectory';

import CustomOrderPage from './CustomOrderPage';

export default function CorsetsPage() {

  let { shopPage } = useParams();

  return (
    <div>
      <ShopDirectory />
      <Grid2 container style={{display: "flex", justifyContent: "center"}}>
        {!shopPage && products.map((product, index) => (
          <div key={index}>
            <Link to={`/products/${product.name}`} style={{textDecoration: "none"}}>
              <ProductCard
                status={product.status}
                imgFront={product.imgFront}
                imgBack={product.imgBack}
                name={product.name}
                price={product.price}
              />
            </Link>
          </div>
        ))}
        {shopPage === "available" && products.filter((product) => product.available).map((product, index) => (
          <div key={index}>
            <Link to={`/products/${product.name}`} style={{textDecoration: "none"}}>
              <ProductCard
                imgFront={product.imgFront}
                imgBack={product.imgBack}
                name={product.name}
                price={product.price}
              />
            </Link>
          </div>
        ))}
        {shopPage === "custom" && <CustomOrderPage/>}
      </Grid2>
    </div>
  )
}