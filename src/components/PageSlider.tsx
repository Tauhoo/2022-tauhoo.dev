import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`
type SliderProps = {
  maxPage: number
  currentPage: number
}

const Slider = styled.div`
  width: ${({ maxPage }: SliderProps): string => `${maxPage * 100}%`};
  display: grid;
  grid-template-columns: repeat(
    ${({ maxPage }: SliderProps): number => maxPage},
    1fr
  );
  position: absolute;
  top: 0px;
  left: ${({ currentPage }: SliderProps): string =>
    `${-1 * currentPage * 100}%`};
  transition: 0.3s;
`

type PageProps = {
  visible: boolean
}

const Page = styled.div<PageProps>`
  height: max-content;
  width: 100%;
  opacity: ${({ visible }: PageProps): number => (visible ? 1 : 0)};
  transition: 0.3s;
`

type Props = {
  currentPage: number
  pages: React.ReactNode[]
}

const PageSlider: React.FC<Props> = ({ pages, currentPage }) => {
  return (
    <Container>
      <Slider maxPage={pages.length} currentPage={currentPage}>
        {pages.map((page, index) => (
          <Page visible={index === currentPage} key={String(index)}>
            {page}
          </Page>
        ))}
      </Slider>
    </Container>
  )
}

export default PageSlider
