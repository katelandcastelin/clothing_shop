import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import NavButton from './NavButton';
import KCLogo from '../utils/logo/quicklogo2.png';

const HeaderNavStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default function HeaderNav() {
  return (
    <div>
      {/* <div style={{display: "flex", float: "left", paddingLeft: "20px"}}>
        <Link to="/">
          <img
            src={KCLogo}
            width={150}
          />
        </Link>
      </div> */}
      <div style={HeaderNavStyles}>
        <Link to="/"><NavButton>Home</NavButton></Link>
        <Link to="/shop"><NavButton>Shop</NavButton></Link>
        <Link to="/dress-up-game"><NavButton>Dress-up game</NavButton></Link>
        <Link to="/lookbook"><NavButton>Lookbook</NavButton></Link>
        <Link to="/info"><NavButton>Info</NavButton></Link>
      </div>
    </div>
  )
}