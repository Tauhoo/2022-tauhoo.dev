import styled from 'styled-components'
type VisiblerProps = {
  visible: boolean
}

const Visibler = styled.div<VisiblerProps>`
  opacity: ${({ visible }: VisiblerProps): number => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: VisiblerProps): string =>
    visible ? 'inherit' : 'none'};
  transition: 0.2s;
`

export default Visibler
