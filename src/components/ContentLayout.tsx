import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100%;
`

const ContentLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentLayout
