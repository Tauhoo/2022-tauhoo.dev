import React from 'react'
import styled from 'styled-components'
import PanelImage from './PanelImage'

const Entry = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`

const MetaContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 10px;
`

export type Props = {
  logo: string
  title: string
  description: string
}

const Experience: React.FC<Props> = ({ logo, title, description }) => {
  return (
    <Entry>
      <PanelImage url={logo} />
      <MetaContainer>
        <div style={{ color: '#353535', fontWeight: 'bolder' }}>{title}</div>
        <div>{description}</div>
      </MetaContainer>
    </Entry>
  )
}

export default Experience
