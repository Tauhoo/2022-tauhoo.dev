import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Title from './Title'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

type Props = {
  title: string
}

const Panel: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default Panel
