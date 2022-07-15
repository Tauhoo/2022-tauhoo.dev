import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Title from './Title'

import PanelPagination from './PanelPagination'
import PageSlider from './PageSlider'
import HardSkill, { Props as HardSkillProps } from './HardSkill'
import IconImage from './IconImage'

import HTMLLogo from '../images/htmlLogo.png'
import CSSLogo from '../images/cssLogo.png'
import JSLogo from '../images/javascriptLogo.png'
import GolangLogo from '../images/golangLogo.png'
import ReactLogo from '../images/reactLogo.png'

const ContentLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 20px;
`

const SkillSetLayout = styled.div`
  display: grid;
  gap: 20px;
`

const hardSkillSet: HardSkillProps[] = [
  {
    logo: <IconImage url={HTMLLogo} width='50px' height='50px' />,
    title: 'HTML',
    progress: 90,
    year: 5,
  },
  {
    logo: <IconImage url={CSSLogo} width='50px' height='50px' />,
    title: 'CSS',
    progress: 80,
    year: 5,
  },
  {
    logo: <IconImage url={JSLogo} width='50px' height='50px' />,
    title: 'JS',
    progress: 70,
    year: 5,
  },
  {
    logo: <IconImage url={GolangLogo} width='50px' height='50px' />,
    title: 'Golang',
    progress: 70,
    year: 2,
  },
  {
    logo: <IconImage url={ReactLogo} width='50px' height='50px' />,
    title: 'React',
    progress: 60,
    year: 4,
  },
]

const SkillPanel = () => {
  const [page, setPage] = useState<number>(0)
  return (
    <>
      <Panel>
        <ContentLayout>
          <Title>Skill</Title>
          <PageSlider
            currentPage={page}
            pages={[
              <SkillSetLayout>
                {hardSkillSet.map(props => {
                  return <HardSkill {...props}></HardSkill>
                })}
              </SkillSetLayout>,
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

export default SkillPanel
