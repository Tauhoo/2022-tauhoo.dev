import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Title from './Title'

import PanelPagination from './PanelPagination'
import PageSlider from './PageSlider'
import HardSkill, { Props as HardSkillProps } from './HardSkill'
import Project, { Props as ProjectProps } from './Project'
import IconImage from './IconImage'

import HTMLLogo from '../images/htmlLogo.png'
import CSSLogo from '../images/cssLogo.png'
import JSLogo from '../images/javascriptLogo.png'
import GolangLogo from '../images/golangLogo.png'
import ReactLogo from '../images/reactLogo.png'

import KUKoreanLogo from '../images/kukoreanLogo.png'
import TauhooLogo from '../images/logo.png'
import AdonLogo from '../images/adonLogo.png'
import MakeLogo from '../images/MakeLogo.png'

const ContentLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 20px;
`

const ListLayout = styled.div`
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

const projectSetPart1: ProjectProps[] = [
  {
    url: 'https://kukorean.com/',
    imageUrl: KUKoreanLogo,
    description:
      "A website for learning Korean language that consists of the instructor's and student’s features including creating a test, creating a course, enrollment, etc.",
  },
  {
    url: 'https://tauhoo.dev/',
    imageUrl: TauhooLogo,
    description:
      'tauhoo.dev is my web blog some time. I write what I have learn or want to share here.',
  },
]

const projectSetPart2: ProjectProps[] = [
  {
    url: 'https://github.com/Tauhoo/adon-desktop',
    imageUrl: AdonLogo,
    description:
      'Adon - This is a software that can convert Go plugin to GUI like Postman',
  },
  {
    url: 'https://makebykbank.kbtg.tech/',
    imageUrl: MakeLogo,
    description:
      'Make is the project. I’m working on. It’s a mobile  banking application that have many cool feature such as dividing you wallet to many sub wallet',
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
              <>
                <div>Languages and framworks</div>
                <br />
                <ListLayout>
                  {hardSkillSet.map(props => {
                    return <HardSkill {...props}></HardSkill>
                  })}
                </ListLayout>
              </>,
              <ListLayout>
                <div>
                  Projects <br />
                </div>
                {projectSetPart1.map((props, index) => (
                  <Project {...props} key={String(index)} />
                ))}
              </ListLayout>,
              <ListLayout>
                <div>
                  Projects <br />
                </div>
                {projectSetPart2.map((props, index) => (
                  <Project {...props} key={String(index)} />
                ))}
              </ListLayout>,
            ]}
          />
          <PanelPagination maxPage={3} onChange={setPage} />
        </ContentLayout>
      </Panel>
    </>
  )
}

export default SkillPanel
