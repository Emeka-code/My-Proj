import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <Logo src="codelab1.png" />
      <Navigator>
        <Nav>Home</Nav>
        <Nav>Pricing</Nav>
        <Nav>How it Works</Nav>
        <Nav>About Us</Nav>
        <Nav>Portfolio</Nav>
        <Button>Contact Us</Button>
      </Navigator>
      <Menu>
        <AiOutlineMenu
          id="menu"
          onClick={() => {
            document.getElementById("sidebar").style.width = "300px";
            document.getElementById("menu").style.display = "none";
            document.getElementById("close").style.display = "block";
          }}
        />
        <AiOutlineClose
          id="close"
          style={{
            display: "none",
          }}
          onClick={() => {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("menu").style.display = "block";
            document.getElementById("close").style.display = "none";
          }}
        />
      </Menu>
      <SideBar id="sidebar">
        <Sider>
          <SideNav>Home</SideNav>
          <SideNav>Pricing</SideNav>
          <SideNav>How it Works</SideNav>
          <SideNav>About Us</SideNav>
          <SideNav>Portfolio</SideNav>
        </Sider>
        <Logonav src="codelab1.png" />
      </SideBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: var(--bColor);
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;
const Logo = styled.img`
  height: 90px;
  width: 100px;
`;
const Navigator = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* background: green; */
`;
const Nav = styled.div`
  margin-right: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`;
const Button = styled.button`
  background: red;
  border: 0;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  :hover {
    background: white;
    color: black;
  }
`;
const Menu = styled.div`
  display: none;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const SideBar = styled.div`
  width: 0;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: none;
  transition: 300ms;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const SideNav = styled.div`
  color: white;
  margin-top: 50px;
`;
const Sider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* background: red; */
`;
const Logonav = styled.img`
  margin-bottom: 20px;
  height: 90px;
  width: 100px;
`;
// const Container = styled.div``;
// const Container = styled.div``;
