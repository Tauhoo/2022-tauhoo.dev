import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import { ContentLayout } from '../components/Layout'
import ExperiencePanel from '../components/ExperiencePanel'
import GlobalStyle from '../components/globalStyle'
import Navbar from '../components/Navbar'
import PanelDisplayer, { PanelEntry } from '../components/PanelDisplayer'
import ProfilePanel from '../components/ProfilePanel'
import Room from '../components/Room'
import SkillPanel from '../components/SkillPanel'
import { panelNames } from '../core/panel'
import Loading from '../components/Loading'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  gap: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`
type StaticPanelContainerProps = {
  visible: boolean
}

const StaticPanelContainer = styled.div<StaticPanelContainerProps>`
  width: 350px;
  height: 100%;
  @media (max-width: 950px) {
    width: 100%;
    position: absolute;
    top: ${({ visible }: StaticPanelContainerProps) =>
      visible ? '0%' : '100%'};
    left: 0px;
    transition: 0.3s;
  }
`

type RoomContainerProps = {
  visible: boolean
}

const RoomContainer = styled.div<RoomContainerProps>`
  width: 100%;
  height: 100%;
  z-index: 10000;
  @media (max-width: 950px) {
    position: absolute;
    top: ${({ visible }: RoomContainerProps) => (visible ? '0%' : '100%')};
    left: 0px;
    transition: 0.3s;
  }
`

const LoadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

// markup
const IndexPage = () => {
  const [panel, setPanel] = useState<string>(panelNames.NONE)
  const [loading, setLoading] = useState<boolean>(true)

  const panels: PanelEntry[] = [
    {
      name: panelNames.PROFILE,
      panel: <ProfilePanel onClose={() => setPanel(panelNames.NONE)} />,
    },
    {
      name: panelNames.SKILL,
      panel: <SkillPanel onClose={() => setPanel(panelNames.NONE)} />,
    },
    {
      name: panelNames.EXPERIENCE,
      panel: <ExperiencePanel onClose={() => setPanel(panelNames.NONE)} />,
    },
    { name: panelNames.NONE, panel: <div></div> },
  ]

  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Container>
        <LoadingWrapper>
          <Layout>
            <Navbar></Navbar>
            <ContentLayout>
              <RoomContainer visible={panel === panelNames.NONE}>
                <Room
                  onChangeRoom={setPanel}
                  onLoadSucess={() => setLoading(false)}
                />
              </RoomContainer>
              <StaticPanelContainer visible={panel !== panelNames.NONE}>
                <PanelDisplayer panels={panels} currentPanel={panel} />
              </StaticPanelContainer>
            </ContentLayout>
          </Layout>
          <Loading visible={loading} />
        </LoadingWrapper>
      </Container>
    </main>
  )
}

export default IndexPage
