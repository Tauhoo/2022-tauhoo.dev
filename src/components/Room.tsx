import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'
import RoomRenderer, { RoomSection } from '../core/room'
import * as Panel from '../core/panel'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0px;
  left: 0px;
`

const center = new THREE.Vector3(-2, 3, -2)
const cameraPosition = new THREE.Vector3(10, 8, 10)
const hoverAnimationOffestScale = 800

type Props = {
  onChangeRoom?: (newPanel: string) => void
}

const Room: React.FC<Props> = ({ onChangeRoom }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const roomRendererRef = useRef<RoomRenderer | null>(null)

  const init = async () => {
    if (canvasRef.current === null || containerRef.current === null) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    roomRendererRef.current = new RoomRenderer(canvasRef.current, width, height)
    await roomRendererRef.current.load()

    roomRendererRef.current.camera.position.set(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z
    )
    roomRendererRef.current.camera.lookAt(center)
    roomRendererRef.current.start()
  }

  const onMouseMove: React.MouseEventHandler<HTMLCanvasElement> = e => {
    if (roomRendererRef.current === null) return
    if (!(e.target instanceof HTMLCanvasElement)) return
    const canvas: HTMLCanvasElement = e.target
    const { x, y, height, width } = canvas.getBoundingClientRect()
    const xOffset = (e.clientX - x - width / 2) / hoverAnimationOffestScale
    const yOffset =
      ((e.clientY - y - height / 2) * -1) / hoverAnimationOffestScale
    roomRendererRef.current.camera.lookAt(
      new THREE.Vector3(center.x + xOffset, center.y + yOffset, center.z)
    )
    const xOffsetRatio = (e.clientX - x - width / 2) / (width / 2)
    const yOffsetRatio = ((e.clientY - y - height / 2) * -1) / (height / 2)
    roomRendererRef.current.moveRaycaster(xOffsetRatio, yOffsetRatio)
  }

  const onClick = () => {
    if (!onChangeRoom) return
    switch (roomRendererRef.current?.roomSection) {
      case RoomSection.EXPERIENCE:
        onChangeRoom(Panel.panelNames.EXPERIENCE)
        break
      case RoomSection.PROFILE:
        onChangeRoom(Panel.panelNames.PROFILE)
        break
      case RoomSection.SKILL:
        onChangeRoom(Panel.panelNames.SKILL)
        break
      default:
        break
    }
  }

  const onResize: (this: Window, ev: UIEvent) => void = e => {
    if (
      canvasRef.current === null ||
      containerRef.current === null ||
      roomRendererRef.current === null
    )
      return
    const { width, height } = containerRef.current.getBoundingClientRect()
    roomRendererRef.current.updateSize(width, height)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    init()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} onMouseMove={onMouseMove} onClick={onClick} />
    </Container>
  )
}

export default Room
