// Navbar.jsx
import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as N from './NavbarStyle';
import LogoImg from '/src/assets/icon/NavFooter/Logo.svg';

export default function Navbar() {
  const navigate=useNavigate('');
  return (
    <N.NavContainer style={{ paddingLeft: '5%', paddingRight: '6%'}}>
      <div onClick={e => navigate('/')} style={{ cursor: 'pointer', maxWidth: '90%', marginLeft: '1%', display: 'flex', flexDirection: 'row', gap: '20%' , alignItems: 'center', justifyContent: 'space-between'}}>
        <img src={LogoImg}/>
        <N.Logo>LOGO</N.Logo>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '60%' , alignItems: 'center',justifyContent: 'space-between'}}>
      <N.SearchIcon>
        <FaSearch />
      </N.SearchIcon>
      <N.MenuIcon>
        <FaBars />
      </N.MenuIcon>
      </div>
    </N.NavContainer>
  );
}

