import React from 'react'
import styled from 'styled-components'

const Container = styled.img`
  object-fit: contain;
`

export type Props = {
  url: string
  style?: React.StyleHTMLAttributes<HTMLImageElement>
  width: string
  height: string
}

const IconImage: React.FC<Props> = ({ url, style, height, width }) => {
  return (
    <Container
      src={url}
      style={style}
      height={height}
      width={width}
    ></Container>
  )
}

export default IconImage
