import React, { useState } from 'react'
import styled from 'styled-components'
import IconImage from './IconImage'

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 20px;
`

const Description = styled.div`
  width: 100%;
`

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export type Props = {
  imageUrl: string
  description: string
  url: string
}

const Project: React.FC<Props> = ({ imageUrl, description }) => {
  return (
    <Container>
      <IconContainer>
        <IconImage url={imageUrl} width='60px' height='60px' />
      </IconContainer>
      <Description>{description}</Description>
    </Container>
  )
}

export default Project
