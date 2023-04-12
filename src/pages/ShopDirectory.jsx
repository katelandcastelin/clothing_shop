import React from "react";

import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter, useParams } from 'react-router-dom';

import DirectoryButton from '../components/DirectoryButton';

const StyledTitle = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "20px",
}

export default function ShopDirectory() {

  let { shopPage } = useParams();

  return (
    <div style={StyledTitle}>
      <Link to="/shop"><DirectoryButton active={shopPage === undefined}>Shop corsets</DirectoryButton></Link>
      <Link to="/shop/custom"><DirectoryButton active={shopPage === "custom"}>Custom order</DirectoryButton></Link>
      <Link to="/shop/available"><DirectoryButton active={shopPage === "available"}>Available</DirectoryButton></Link>
    </div>
  )
}