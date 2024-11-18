import styled from "styled-components";

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
`;

export const Sidebar = styled.nav`
  width: 250px;
  background-color: #141a1f;
  padding: 20px;
  border-right: 1px solid #333;
  overflow-y: auto;
  margin-bottom: 30vh;
`;

export const SidebarItem = styled.button`
  display: block;
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? "#333" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#aaa")};
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

export const Content = styled.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  margin-bottom: 30vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }`;

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
  }
`;
