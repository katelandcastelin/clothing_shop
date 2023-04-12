import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DressUpGame from '../pages/DressUpGame';
import InfoPage from '../pages/InfoPage';
import CorsetsPage from '../pages/CorsetsPage';
import CustomOrderPage from '../pages/CustomOrderPage';
import AvailablePage from '../pages/AvailablePage';
import Lookbook from '../pages/Lookbook';

import ProductPage from '../pages/ProductPage';

const PageStyles = {
  paddingTop: "30px",
 }

export default function PageLayout() {
  return (
    <>
      <div style={PageStyles}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<CorsetsPage />}></Route>
          <Route path="/shop/:shopPage" element={<CorsetsPage />}></Route>
          <Route path="/dress-up-game" element={<DressUpGame />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>

          <Route path="/corsets-page" element={<CorsetsPage />}></Route>
          <Route path="/custom-order" element={<CustomOrderPage />}></Route>
          <Route path="/available" element={<AvailablePage />}></Route>

          <Route path="/lookbook" element={<Lookbook />}></Route>
          <Route path="/products/:productId" element={<ProductPage />}></Route>
        </Routes>
      </div>
    </>
  )
}