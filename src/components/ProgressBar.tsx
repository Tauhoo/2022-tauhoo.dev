import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f0f0f0;
`

type BarProps = {
  progress: number
}

const Bar = styled.div`
  height: 100%;
  width: ${({ progress }: BarProps): string => `${progress}%`};
  border-radius: 5px;
  background: linear-gradient(90deg, #6d6afe 0%, #fe6a6a 100%);
  transition: 0.3s;
`

type Props = {
  progress: number
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <Container>
      <Bar progress={progress} />
    </Container>
  )
}

export default ProgressBar
