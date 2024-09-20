import styled from 'styled-components';


export const Logo = styled.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const IconStyle = styled.div`
  font-size: 3rem;
  cursor: pointer;
`;

export const SearchIcon = styled(IconStyle)`
  font-size: 3rem;
`;



export const MenuItem = styled.div`
  padding: 0.9vw 0;
  color: #292f36;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: arial;
  font-weight: bold;
  text-align: left;
  padding-left: 1vw;

  &:hover {
    background-color: #ddd;
    padding-left: 1.6vw;
    transition: all 0.5s ease;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem;
    padding: 2%;
    margin-bottom: 1.5%;
    
    &:hover {
      background-color: #ddd;
      padding-left: 4vw;
      transition: all 0.5s ease;
    }
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
  img{
    max-width: 10rem;
  }
  @media (max-width: 500px) {
    img{
      max-width: 8.5rem;
    }
  }
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
  h1{
  background: linear-gradient(to top, #D0E7FE 40%, transparent 10%)
  //style={{background: 'linear-gradient(to top, #D0E7FE 40%, transparent 10%)'}}
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 5vw;
    margin: 0;
    border-radius: 0;
    h1{
      font-size: 2.3rem;
    }
  }
`;

export const MenuIcon = styled.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 900px) {
    padding-right: 5vw;
  }
`;