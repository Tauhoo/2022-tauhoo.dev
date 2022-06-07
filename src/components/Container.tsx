import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 60px;
  @media (max-width: 1000px) {
    padding: 0px 40px;
  }

  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`

const Content = styled.div`
  max-width: 100%;
  width: 1400px;
`

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Container
