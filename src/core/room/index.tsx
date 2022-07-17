import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const roomFile = '/models/room.glb'
const cameraSize = 25
function newWebGLRenderer(
  canvas: Element,
  width: number,
  height: number
): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  return renderer
}

export enum RoomRendererState {
  IDLE = 1,
  LOADING,
  LOADED,
  RUNNING,
}

class RoomRenderer {
  scene: THREE.Scene
  camera: THREE.OrthographicCamera
  webGLRenderer: THREE.WebGLRenderer
  width: number
  height: number
  state: RoomRendererState
  textureLoader: GLTFLoader
  roomGroup?: THREE.Group

  constructor(canvas: Element, width: number, height: number) {
    const ratio = width / height
    this.state = RoomRendererState.IDLE

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      cameraSize / -2,
      cameraSize / 2,
      cameraSize / (2 * ratio),
      cameraSize / (-2 * ratio),
      0,
      10000
    )

    scene.add(camera)

    this.scene = scene
    this.camera = camera
    this.webGLRenderer = newWebGLRenderer(canvas, width, height)
    this.webGLRenderer.setClearColor(0x000000, 0)
    this.webGLRenderer.physicallyCorrectLights = true
    this.webGLRenderer.toneMapping = THREE.ReinhardToneMapping
    this.webGLRenderer.toneMappingExposure = 3
    this.width = width
    this.height = height
    this.textureLoader = new GLTFLoader()
  }

  tick = () => {
    this.webGLRenderer.render(this.scene, this.camera)
    window.requestAnimationFrame(this.tick)
  }

  load = async () => {
    if (this.state !== RoomRendererState.IDLE)
      throw new Error('cannot start rendering state is not idle')

    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 5)
    this.scene.add(hemiLight)

    const sunLight = new THREE.SpotLight(0xffa95c, 4)
    sunLight.position.set(-50, 50, 50)
    this.scene.add(sunLight)
    const light = new THREE.DirectionalLight('#fff', 2)
    light.position.set(0.5, 0, 0.866)
    this.scene.add(light)

    this.scene.add(new THREE.AmbientLight('#fff', 2))

    const gltf = await this.textureLoader.loadAsync(roomFile)
    this.roomGroup = gltf.scene

    this.state = RoomRendererState.LOADED
    this.scene.add(this.roomGroup)
  }

  start = () => {
    if (this.state !== RoomRendererState.LOADED)
      throw new Error('cannot start rendering state is not loaded')

    this.state = RoomRendererState.RUNNING
    this.tick()
  }
}

export default RoomRenderer
