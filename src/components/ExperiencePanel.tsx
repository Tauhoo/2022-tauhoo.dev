import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import Title from './Title'
import PageSlider from './PageSlider'
import PanelPagination from './PanelPagination'
import Experience, { Props as ExperienceProps } from './Experience'

import GraduateLogo from '../images/graduateLogo.jpeg'
import InternLogo from '../images/internLogo.jpeg'
import PanelHeader from './PanelHeader'

const ContentLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 20px;
`

const ExperienceListContainer = styled.div`
  display: grid;
  gap: 40px;
`

const experiens = [
  {
    year: '2021',
    list: [
      {
        logo: GraduateLogo,
        title: 'Graduate',
        description:
          'I create specific arcitecture hardware for neural network algoritm so that is why I also have some an experience to develop hardware.',
      },
    ],
  },
  {
    year: '2020',
    list: [
      {
        logo: InternLogo,
        title: 'Intern at Innovative Software Consulting',
        description:
          'I was an intern as a software engineer. I have the chance to use many tools such as Golang, Spring framework, Android, etc. I was appointed to create a queueing software and notification react native library',
      },
    ],
  },
  {
    year: '2018',
    list: [
      {
        logo: GraduateLogo,
        title: 'Graduate',
        description:
          'I create specific arcitecture hardware for neural network algoritm so that is why I also have some an experience to develop hardware.',
      },
      {
        logo: InternLogo,
        title: 'Intern at Innovative Software Consulting',
        description:
          'I was an intern as a software engineer. I have the chance to use many tools such as Golang, Spring framework, Android, etc. I was appointed to create a queueing software and notification react native library',
      },
    ],
  },
]

type Props = {
  onClose: () => void
}
const ExperiencePanel: React.FC<Props> = ({ onClose }) => {
  const [page, setPage] = useState<number>(0)
  return (
    <>
      <Panel>
        <ContentLayout>
          <PanelHeader onClose={onClose}>Experience</PanelHeader>
          <PageSlider
            currentPage={page}
            pages={experiens.map(({ year, list }) => (
              <>
                <div>{year}</div>
                <br />
                <ExperienceListContainer>
                  {list.map((props, index) => (
                    <Experience key={String(index)} {...props} />
                  ))}
                </ExperienceListContainer>
              </>
            ))}
          />
          <PanelPagination maxPage={experiens.length} onChange={setPage} />
        </ContentLayout>
      </Panel>
    </>
  )
}

export default ExperiencePanel
