import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

import CorsetsPage from '../pages/CorsetsPage';
import CustomOrderPage from '../pages/CustomOrderPage';
import AvailablePage from '../pages/AvailablePage';

const PageStyles = {
  padding: "30px, 30px",
  display: "flex",
  justifyContent: "center",
 }

export default function DirectoryLayout() {
  return (
    <>
      <div style={PageStyles}>
        <CorsetsPage />
      </div>
    </>
  )
}