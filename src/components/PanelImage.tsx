import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Image, { Props as ImageProps } from './Image'

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 200px;
`

const PanelImage: React.FC<ImageProps> = ({ url, style }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image url={url} style={style} />
      </ImageWrapper>
    </Container>
  )
}

export default PanelImage
