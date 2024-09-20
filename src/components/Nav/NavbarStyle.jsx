import styled from 'styled-components';


export const Logo = styled.div`
  font-size: 2vw;
  font-weight: bold;
`;

export const IconStyle = styled.div`
  font-size: 1.5vw;
  cursor: pointer;
`;

export const SearchIcon = styled(IconStyle)`
  font-size: 1.8vw;
`;



export const MenuItem = styled.div`
  padding: 0.9vw 0;
  color: #292f36;
  cursor: pointer;
  font-size: 0.8vw;
  font-family: arial;
  font-weight: bold;
  text-align: left;
  padding-left: 1vw;

  &:hover {
    background-color: #ddd;
    padding-left: 1.6vw;
    transition: all 0.5s ease;
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9vw 2vw;
  background-color: ${props => props.isScrolled ? '#292f36' : 'transparent'};
  color: ${props => props.isScrolled ? '#fff' : '#aaa'};
  transition: background-color 0.9s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const MenuList = styled.div`
  position: fixed;
  top: 1%;
  right: 0;
  background-color: #eee;
  width: 17%;
  padding: 1.5vw;
  padding-right: 2.5vw;
  margin-right: 1.3%;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1050;
`;

export const MenuIcon = styled.div`
  font-size: 1.8vw;
  cursor: pointer;
`;