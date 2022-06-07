import React from "react"
import styled from "styled-components"

import Container from "./Container"

import Logo from "./icons/Logo"
import FacebookLogo from "./icons/Facebook"
import TwitterLogo from "./icons/Twitter"
import PinterestLogo from "./icons/Pinterest"
import GithubLogo from "./icons/Github"

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 40px;

  padding: 40px 0px;
  font-size: 3rem;
  font-weight: 700;
  color: #353535;

  @media (max-width: 1000px) {
    padding: 20px 0px;
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    gap: 0px;
    grid-template-columns: 1fr max-content;
  }
`

const WebName = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const LogoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 10px;
`

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo></Logo>
        <WebName>tauhoo.dev</WebName>
        <LogoList>
          <FacebookLogo />
          <TwitterLogo />
          <PinterestLogo />
          <GithubLogo />
        </LogoList>
      </Content>
    </Container>
  )
}

export default Navbar
