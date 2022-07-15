import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 350px;
  position: relative;
  overflow: hidden;
`

type PanelContainerProps = {
  visible: boolean
}

const PanelContainer = styled.div`
  position: absolute;
  top: 0px;
  left: ${({ visible }: PanelContainerProps): string =>
    visible ? '0%' : '100%'};
  opacity: ${({ visible }: PanelContainerProps): number => (visible ? 1 : 0)};
  transition: 0.3s;
  height: 100%;
  width: 100%;
`

export type PanelEntry = {
  name: string
  panel: React.ReactNode
}

type Props = {
  panels: PanelEntry[]
  currentPanel: string
}

const PanelDisplayer: React.FC<Props> = ({ panels, currentPanel }) => {
  return (
    <Container>
      {panels.map(({ name, panel }) => (
        <PanelContainer visible={name === currentPanel} key={name}>
          {panel}
        </PanelContainer>
      ))}
    </Container>
  )
}

export default PanelDisplayer
