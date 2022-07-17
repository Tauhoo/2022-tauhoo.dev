import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import ContentLayout from '../components/ContentLayout'
import ExperiencePanel from '../components/ExperiencePanel'
import GlobalStyle from '../components/globalStyle'
import Navbar from '../components/Navbar'
import PanelDisplayer, { PanelEntry } from '../components/PanelDisplayer'
import ProfilePanel from '../components/ProfilePanel'
import Room from '../components/Room'
import SkillPanel from '../components/SkillPanel'
import { panelNames } from '../core/panel'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  gap: 20px;
`

const panels: PanelEntry[] = [
  { name: panelNames.PROFILE, panel: <ProfilePanel /> },
  { name: panelNames.SKILL, panel: <SkillPanel /> },
  { name: panelNames.EXPERIENCE, panel: <ExperiencePanel /> },
]

// markup
const IndexPage = () => {
  const [panel, setPanel] = useState(panelNames.PROFILE)

  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Container>
        <Layout>
          <Navbar></Navbar>
          <ContentLayout>
            <Room />
            <PanelDisplayer panels={panels} currentPanel={panel} />
          </ContentLayout>
        </Layout>
      </Container>
    </main>
  )
}

export default IndexPage
