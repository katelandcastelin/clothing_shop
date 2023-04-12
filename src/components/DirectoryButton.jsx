import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const DirectoryButtonStyles = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: #849392;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

export default function DirectoryButton({children, active}) {

  return (
    <div>
      <DirectoryButtonStyles
        key={children}
        active={active}
      >
        <Typography variant="body2">
          {children}
        </Typography>
      </DirectoryButtonStyles>
    </div>
  )
}