import styled from "styled-components";

export const Div = styled.div`
  height: 11vh;
  min-height: 80px;
  background-color: #292f36;

  @media (max-width: 780px) {
    min-height: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 170vh;
  letter-spacing: 2px;
  cursor: text;
  user-select: text;
  height: auto;
  margin-bottom: -30vh;

  @media (max-width: 780px) {
    margin-left: ${({ $isMenuOpen }) => ($isMenuOpen ? "250px" : "0")};
    transition: margin-left 0.3s ease;
  }
`;

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #141a1f;
  padding: 120px 20px;
  border-right: 1px solid #333;
  z-index: 100;
  transition: left 0.3s ease;
  overflow-y: auto;

  @media (min-width: 780px) {
    position: static;
    padding: 20px;
    left: 0;
    height: auto;
    z-index: auto;
  }
`;

export const SidebarItem = styled.button`
  display: block;
  width: 100%;
  background-color: ${({ $isActive }) => ($isActive ? "#333" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#aaa")};
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #2a2f35;
    color: #fff;
  }
`;
export const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #141a1f;
  border-radius: 10px;
  position: fixed;
  top: 55px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;

  .menu-icon {
    width: 30px;
    height: auto;
  }

  @media (min-width: 780px) {
    display: none;
  }

  &:hover {
    background-color: #333; 
  }
  &:active {
    border: 2px solid #60E6F2;
    background-color: rgba(0, 0, 0, 0.1); 
  }
`;



export const Content = styled.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  margin-bottom: 30vh;
  @media(max-width: 780px){
    padding: 50px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 21px;
  }
`;

  export const Description = styled.p`
  font-size: 17px;
  line-height: 1.7; 
  font-weight: 400;
  padding: 10px;
  border-left: 4px solid #60e6f2;
  margin-bottom: 20px;
  background-color: #2a2f35; 
  border-radius: 4px;
  color: #ccc; 
  &::selection {
    background-color: #60e6f2;
    color: #000;
    font-weight:
  }
  @media(max-width: 780px){
    font-size: 16px;
  }
`;


export const SubsectionContainer = styled.div`
  margin-top: 25px;
  border-radius: 10px;
`;


export const SubsectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #60E6F2;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 17px;
  }
`;

export const SubsectionContent = styled.p`
  font-size: 16px; 
  line-height: 1.65; 
  margin-right: 20px;
  white-space: pre-wrap;
  margin-bottom: 25px; 
  padding: 10px 15px; 
  font-family: 'Arial', sans-serif;
  font-weight: 400; 
  letter-spacing: 0.8px; 
  background-color: #2a2f35; 
  border-radius: 5px; 
  color: #ddd; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  &::selection {
    background-color: #60e6f2;
    color: #000;
    font-weight: bold;
  }
  @media(max-width: 780px){
    margin-right: 0px;
    font-size: 13px; 
    line-height: 1.6;
    margin-bottom: 15px; 
  }
`;

export const SidebarStickyContainer = styled.div`
  position: sticky;
  top: 0; /* 화면 상단에 고정 */
  z-index: 110; /* 다른 요소보다 위로 배치 */
  background-color: #141a1f; /* 배경색을 고정 */
  padding-top: 20px; /* 내부 간격 추가 */
`;
