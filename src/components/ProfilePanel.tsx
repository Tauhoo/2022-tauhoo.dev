import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Title from './Title'
import profileImage from '../images/profile.jpg'

import PanelImage from './PanelImage'
import PanelPagination from './PanelPagination'

const ContentLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
  gap: 30px;
`

const PanelProfile = () => {
  return (
    <>
      <Panel>
        <ContentLayout>
          <Title>Profile</Title>
          <PanelImage url={profileImage}></PanelImage>
          <div>
            I’m Wachirawit Wacharak. You can call me Ice. I’m working as
            Software Engineer at KBTG in Bangkok. Although, My main skill is web
            development both frontend and backend, I’m still interested in art
            and others. You can see below.
          </div>
          <PanelPagination maxPage={3} onChange={console.log} />
        </ContentLayout>
      </Panel>
    </>
  )
}

export default PanelProfile
