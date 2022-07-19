import React from 'react'
import styled from 'styled-components'

import Logo from './icons/Logo'
import FacebookLogo from './icons/Facebook'
import TwitterLogo from './icons/Twitter'
import PinterestLogo from './icons/Pinterest'
import GithubLogo from './icons/Github'

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  color: #353535;
  font-size: 1.5rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr max-content;
    font-size: 1.2rem;
  }
`

const LogoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 10px;
`

const Name = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`

const Navbar: React.FC = () => {
  return (
    <Content>
      <Logo></Logo>
      <Name>tauhoo.dev</Name>
      <LogoList>
        <FacebookLogo />
        <TwitterLogo />
        <PinterestLogo />
        <GithubLogo />
      </LogoList>
    </Content>
  )
}

export default Navbar
