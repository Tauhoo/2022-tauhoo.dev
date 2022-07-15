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
  gap: 30px;
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
                <div>
                  I’m Wachirawit Wacharak. You can call me Ice. I’m working as
                  Software Engineer at KBTG in Bangkok. Although, My main skill
                  is web development both frontend and backend, I’m still
                  interested in art and others.
                </div>
              </>,
              <>
                <PanelImage url={profileImage}></PanelImage>
                <div>
                  I’m Wachirawit Wacharak. You can call me Ice. I’m working as
                  Software Engineer at KBTG in Bangkok. Although, My main skill
                  is web development both frontend and backend, I’m still
                  interested in art and others.
                </div>
              </>,
              <>
                <PanelImage url={profileImage}></PanelImage>
                <div>
                  I’m Wachirawit Wacharak. You can call me Ice. I’m working as
                  Software Engineer at KBTG in Bangkok. Although, My main skill
                  is web development both frontend and backend, I’m still
                  interested in art and others.
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
