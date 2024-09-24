import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as N from './NavbarStyle';
import LogoImg from '/src/assets/icon/Genie.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <N.NavContainer isScrolled={isScrolled} style={{ paddingLeft: '5%', paddingRight: '3%' }}>
        <div
          onClick={() => navigate('/')}
          style={{
            cursor: 'pointer',
            maxWidth: '100%',
            marginRight: '0px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
        <N.NavLogo src={LogoImg} alt="Logo" />
          <N.Logo>Jenie</N.Logo>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '25px', alignItems: 'center', justifyContent: 'flex-end' }}>
        {/*<N.SearchIcon><FaSearch /></N.SearchIcon>*/}
        <N.MenuIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </N.MenuIcon>
        </div>
      </N.NavContainer>

      {isMenuOpen && (
        <N.MenuList>
          <div 
            style={{ marginBottom: '4%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <div 
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', 
            alignItems: 'center', fontSize: '1.7rem', gap: '5%'}}>
            <img src={LogoImg}/>
            <h1>Menu List</h1>
            </div>
            <N.MenuIcon onClick={toggleMenu} style={{fontSize: '3rem', marginTop: '0.5vw'}}><FaTimes /></N.MenuIcon>
          </div>
          <N.MenuItem onClick={() => {
              navigate('/concept');
              setIsMenuOpen(false); 
            }}>양자 개념</N.MenuItem>

            <N.MenuItem onClick={() => {
              navigate('/description');
              setIsMenuOpen(false);
            }}>양자 활용</N.MenuItem>

            <N.MenuItem onClick={() => {
              navigate('/quiz');
              setIsMenuOpen(false);
            }}>양자 퀴즈</N.MenuItem>

            <N.MenuItem onClick={() => {
              navigate('/character');
              setIsMenuOpen(false);
            }}>캐릭터 소개</N.MenuItem>
        </N.MenuList>
      )}
    </>
  );
}