import React from 'react'
import styled from 'styled-components'
import Close from './icons/Close'
import Title from './Title'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
`

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

type Props = {
  onClose: () => void
}

const PanelHeader: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onClose,
}) => (
  <Container>
    <Title>{children}</Title>
    <CloseContainer onClick={onClose}>
      <Close></Close>
    </CloseContainer>
  </Container>
)

export default PanelHeader
