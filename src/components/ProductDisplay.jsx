import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { products } from '../utils/data';

export default function ProductDisplay() {

  const navigate = useNavigate();

  const {productId} = useParams();
  const product = products.find(prod => prod.name === productId);

  return (
    <div>
      <Box style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
        <img
          src={product.imgFront}
          style={{
            maxHeight: "80vh",
            maxWidth: "100%",
          }}
        />
      </Box>
      <div
        style={{
          width: "100%",
          height: "10px",
          border: "1px solid black",
          overflowX: "auto",
          marginBottom: "20px",
        }}
      >
      </div>
    </div>
  );
}