import React from 'react';

import HeaderNav from './HeaderNav';
import HeaderDropdownMenu from './HeaderDropdownMenu';

const HeaderStyles = {
  height: "90px",
  width: "100%",
  backgroundColor: "#849392",
  display: "flex",
  alignItems: "center",
}

const NavStyles = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
}

export default function Header() {
  return (
    <div style={HeaderStyles}>
      <div style={{display: "flex", float: "left", paddingLeft: "20px"}}>
        <HeaderDropdownMenu />
      </div>
      <div style={NavStyles}>
        <HeaderNav />
      </div>
    </div>
  )
}