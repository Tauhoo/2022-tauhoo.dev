import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Visibler from './Visibler'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

type Props = {
  maxPage: number
  onChange: (page: number) => void
}

const PanelPagination: React.FC<Props> = ({ maxPage, onChange }) => {
  const maxPageIndex = maxPage - 1
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
      <Visibler visible={page < maxPageIndex && maxPageIndex != 0}>
        <Button onClick={onNext}>Next</Button>
      </Visibler>
    </Container>
  )
}

export default PanelPagination
