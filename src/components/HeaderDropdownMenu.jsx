import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import KCLogo from '../utils/logo/quicklogo2.png';

const DropdownStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#413f3c",
}

export default function HeaderDropdownMenu() {
  return (
    <div style={DropdownStyles}>
      <Link to="/">
          <img
            src={KCLogo}
            width={150}
          />
      </Link>
    </div>
  )
}