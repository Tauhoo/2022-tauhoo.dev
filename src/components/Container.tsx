import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  padding: 25px 30px;
  background-color: #fff;
  border-radius: 10px;
`

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Container
