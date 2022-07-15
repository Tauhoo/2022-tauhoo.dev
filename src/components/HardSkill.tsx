import React, { useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: max-content auto;
  gap: 20px;
  align-items: center;
`

const BarContainer = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  width: 100%;
  height: 100%;
`

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export type Props = {
  logo: React.ReactNode
  progress: number
  title: string
  year: number
}

const HardSkill: React.FC<Props> = ({ logo, title, progress, year }) => {
  return (
    <>
      <Container>
        {logo}
        <BarContainer>
          <MetaContainer>
            <div>{title}</div>
            <div style={{ fontSize: '0.8rem' }}>{year} year</div>
          </MetaContainer>
          <div>
            <ProgressBar progress={progress} />
          </div>
        </BarContainer>
      </Container>
    </>
  )
}

export default HardSkill
