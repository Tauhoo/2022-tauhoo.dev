import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import styled from 'styled-components'
import RoomRenderer from '../core/room'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`

const center = new THREE.Vector3(-2, 3, -2)
const cameraPosition = new THREE.Vector3(10, 8, 10)
const hoverAnimationOffestScale = 800
const Room = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const roomRendererRef = useRef<RoomRenderer | null>(null)
  const orbitControlsRef = useRef<OrbitControls | null>(null)

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
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} onMouseMove={onMouseMove} />
    </Container>
  )
}

export default Room
