import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
type VisiblerProps = {
  visible: boolean
}

const Visibler = styled.div<VisiblerProps>`
  opacity: ${({ visible }: VisiblerProps): number => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: VisiblerProps): string =>
    visible ? 'inherit' : 'none'};
  transition: 0.2s;
`

type Props = {
  maxPage: number
  onChange: (page: number) => void
}

const PanelPagination: React.FC<Props> = ({ maxPage, onChange }) => {
  const [page, setPage] = useState<number>(0)
  const onPrev = () => {
    setPage(page - 1)
    onChange(page - 1)
  }
  const onNext = () => {
    setPage(page + 1)
    onChange(page + 1)
  }
  return (
    <Container>
      <Visibler visible={page > 0}>
        <Button onClick={onPrev}>Prev</Button>
      </Visibler>
      <Visibler visible={page < maxPage && maxPage != 0}>
        <Button onClick={onNext}>Next</Button>
      </Visibler>
    </Container>
  )
}

export default PanelPagination
