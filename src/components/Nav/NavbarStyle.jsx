// NavbarStyle.jsx
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #000;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
`;

export const IconStyle = styled.div`
  font-size: 1.5vw;
  cursor: pointer;
`;

export const SearchIcon = styled(IconStyle)`
`;

export const MenuIcon = styled(IconStyle)`
`;
