import React from 'react';

import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const NavButtonStyles = styled.button`
  font-family: Roboto;
  background-color: transparent;
  border: none;
  color: #413f3c;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 5px;
  margin-right: 5px;
`

export default function NavButton({children}) {
  return (
    <NavButtonStyles>
      <Typography variant="h6" gutterBottom>
        {children}
      </Typography>
    </NavButtonStyles>
  )
}