import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #353535;
`

const Panel: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Panel
