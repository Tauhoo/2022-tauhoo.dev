import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Title from './Title'
import profileImage from '../images/profile.jpg'

import PanelImage from './PanelImage'
import PanelPagination from './PanelPagination'
import PageSlider from './PageSlider'

const ContentLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 20px;
`

const PanelProfile = () => {
  const [page, setPage] = useState<number>(0)
  return (
    <>
      <Panel>
        <ContentLayout>
          <Title>Profile</Title>
          <PageSlider
            currentPage={page}
            pages={[
              <>
                <PanelImage url={profileImage}></PanelImage>
                <div style={{ marginTop: '20px' }}>
                  I’m Wachirawit Wacharak. You can call me Ice. I’m working as
                  Software Engineer at KBTG in Bangkok. Although, My main skill
                  is web development both frontend and backend, I’m still
                  interested in art and others.
                </div>
              </>,
              <>
                <div>
                  What I’m learning
                  <br />
                  - 3D modeling on Blender
                  <br />
                  - I’m currently study how to modeling and shading in Blender.
                  <br />
                  - Piano - I’m also interest in music creation. So, I think, I
                  will start with piano as my first instrument.
                  <br />- English - My speaking and listening pretty bad. So, I
                  think it time to improve it seriously.
                </div>
              </>,
              <>
                <div>
                  What I like
                  <br />- Playing game - I’m play game with my friend every
                  Friday and Saturday such as Valorant and Dota2.
                </div>
              </>,
            ]}
          />

          <PanelPagination maxPage={3} onChange={setPage} />
        </ContentLayout>
      </Panel>
    </>
  )
}

export default PanelProfile
