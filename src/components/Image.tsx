import React from 'react'
import styled from 'styled-components'

const Container = styled.img`
  width: 100%;
  border-radius: 10px;
`

export type Props = {
  url: string
  style?: React.StyleHTMLAttributes<HTMLImageElement>
}

const Image: React.FC<Props> = ({ url, style }) => {
  return <Container src={url} style={style}></Container>
}

export default Image
