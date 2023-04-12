import React from 'react';

import './App.css';

import { useTheme } from 'styled-components';
import Theme from './Theme';

import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

import Marble from './images/background/marble.jpeg';

export default function App() {
  const theme = useTheme();
  return (
    <Theme>
      <div style={{minHeight: "100vh"}}>
        <PageContainer />
      </div>
      <Footer />
    </Theme>
  )
}