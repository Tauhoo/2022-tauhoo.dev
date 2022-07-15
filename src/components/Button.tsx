import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #2b2b2b;
  border-width: 0px;
  color: #fff;
  cursor: pointer;
`

const Button: React.FC<
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = props => {
  return <Wrapper {...props}></Wrapper>
}

export default Button
