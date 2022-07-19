import React from 'react'
import styled from 'styled-components'

export const ContentLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  height: 100%;
  gap: 20px;
  position: relative;
  overflow: hidden;
  @media (max-width: 950px) {
    display: block;
  }
`
