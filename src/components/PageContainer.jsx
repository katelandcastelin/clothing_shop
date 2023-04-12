import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

import Container from '@mui/material/Container';

import Header from './Header';

import PageLayout from './PageLayout';

export default function PageContainer() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <PageLayout />
        {/* <DirectoryContainer /> */}
        {/* {if shop clicked
          display DirectoryContainer
        } */}
      </Container>
    </div>
  )
}