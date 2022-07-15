import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  height: 100%;
  gap: 20px;
`

const ContentLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentLayout
