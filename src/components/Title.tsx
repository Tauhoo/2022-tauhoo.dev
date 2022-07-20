import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #353535;
  display: flex;
  align-items: center;
`

const Panel: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  )
}

export default Panel
