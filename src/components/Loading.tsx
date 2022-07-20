import React from 'react'
import styled, { keyframes } from 'styled-components'
import Logo from './icons/Logo'

type ContainerProps = {
  visible: boolean
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-color: #fff;
  top: 0px;
  left: 0px;
  z-index: 20000;
  opacity: ${({ visible }: ContainerProps): number => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: ContainerProps): string =>
    visible ? 'auto' : 'none'};
  transition: 1.5s;
  transition-delay: 1s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  font-size: 150px;
  margin-top: 30px;
  @media (max-width: 1024px) {
    font-size: 75px;
  }
  @media (max-width: 620px) {
    font-size: 36px;
  }
`

const WebName = styled.div`
  margin-top: 30px;
  color: #353535;
`

const logoRotation = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg)  }
`

const LogoContainer = styled.div`
  animation-name: ${logoRotation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

type Props = {
  visible: boolean
}

const Loading: React.FC<Props> = ({ visible }) => {
  return (
    <Container visible={visible}>
      <Content>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <WebName>tauhoo.dev</WebName>
      </Content>
    </Container>
  )
}

export default Loading
