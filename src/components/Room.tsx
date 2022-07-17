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

    orbitControlsRef.current = new OrbitControls(
      roomRendererRef.current.camera,
      canvasRef.current
    )
    orbitControlsRef.current.target.set(0, 0.75, 0)
    orbitControlsRef.current.enableDamping = true

    // const material = new THREE.MeshBasicMaterial({ color: 'red' })
    // const geoMetry = new THREE.BoxGeometry(200, 200, 200)
    // const mesh = new THREE.Mesh(geoMetry, material)
    // mesh.position.x = 0
    // mesh.position.y = 0
    // mesh.position.z = 0
    // roomRendererRef.current.scene.add(mesh)

    // roomRendererRef.current.camera.position.x = 1.5
    // roomRendererRef.current.camera.position.y = 1.5
    roomRendererRef.current.camera.position.z = 20
    roomRendererRef.current.camera.position.y = 10
    roomRendererRef.current.camera.position.x = 20
    roomRendererRef.current.camera.lookAt(new THREE.Vector3(0, 0, 0))
    roomRendererRef.current.start()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
    </Container>
  )
}

export default Room
