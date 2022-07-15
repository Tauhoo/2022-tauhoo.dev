import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import ContentLayout from '../components/ContentLayout'
import GlobalStyle from '../components/globalStyle'
import Navbar from '../components/Navbar'
import PanelDisplayer, { PanelEntry } from '../components/PanelDisplayer'
import ProfilePanel from '../components/ProfilePanel'
import SkillPanel from '../components/SkillPanel'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  gap: 20px;
`

const panelNames = {
  PROFILE: 'PROFILE',
  SKILL: 'SKILL',
  EXPERIENCE: 'EXPERIENCE',
}

const panels: PanelEntry[] = [
  { name: panelNames.PROFILE, panel: <ProfilePanel /> },
  { name: panelNames.SKILL, panel: <SkillPanel /> },
  { name: panelNames.EXPERIENCE, panel: <ProfilePanel /> },
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
            <div
              style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
            >
              <button onClick={() => setPanel(panelNames.EXPERIENCE)}>
                {panelNames.EXPERIENCE}
              </button>
              <button onClick={() => setPanel(panelNames.PROFILE)}>
                {panelNames.PROFILE}
              </button>
              <button onClick={() => setPanel(panelNames.SKILL)}>
                {panelNames.SKILL}
              </button>
            </div>
            <PanelDisplayer panels={panels} currentPanel={panel} />
          </ContentLayout>
        </Layout>
      </Container>
    </main>
  )
}

export default IndexPage
