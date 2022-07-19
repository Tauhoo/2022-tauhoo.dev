import * as THREE from 'three'
import { Vector3 } from 'three'
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

export enum RoomSection {
  NONE = 1,
  PROFILE,
  SKILL,
  EXPERIENCE,
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
  raycaster: THREE.Raycaster

  profileHitBox?: THREE.Object3D
  experienceHitBox?: THREE.Object3D
  skillHitBox?: THREE.Object3D
  roomSection: RoomSection

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
    this.raycaster = new THREE.Raycaster()
    this.roomSection = RoomSection.NONE
    this.webGLRenderer.setSize(width, height)
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

    this.profileHitBox = this.roomGroup.getObjectByName('profile_hit_box')
    this.experienceHitBox = this.roomGroup.getObjectByName('experience_hit_box')
    this.skillHitBox = this.roomGroup.getObjectByName('skill_hit_box')

    this.state = RoomRendererState.LOADED
    this.scene.add(this.roomGroup)
  }

  start = () => {
    if (this.state !== RoomRendererState.LOADED)
      throw new Error('cannot start rendering state is not loaded')

    this.state = RoomRendererState.RUNNING
    this.tick()
  }

  updateSize = (width: number, height: number) => {
    this.width = width
    this.height = height
    const ratio = width / height

    this.camera.left = cameraSize / -2
    this.camera.right = cameraSize / 2
    this.camera.top = cameraSize / (2 * ratio)
    this.camera.bottom = cameraSize / (-2 * ratio)
    this.camera.updateProjectionMatrix()
    this.webGLRenderer.setSize(width, height)
    this.webGLRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  // offsetRatio = width/height
  moveRaycaster = (offsetWidthRatio: number, offsetHeightRatio: number) => {
    this.raycaster.setFromCamera(
      new THREE.Vector2(offsetWidthRatio, offsetHeightRatio),
      this.camera
    )

    if (typeof this.profileHitBox !== 'undefined') {
      if (this.raycaster.intersectObject(this.profileHitBox).length > 0) {
        this.roomSection = RoomSection.PROFILE
        return
      }
    }

    if (typeof this.experienceHitBox !== 'undefined') {
      if (this.raycaster.intersectObject(this.experienceHitBox).length > 0) {
        this.roomSection = RoomSection.EXPERIENCE
        return
      }
    }

    if (typeof this.skillHitBox !== 'undefined') {
      if (this.raycaster.intersectObject(this.skillHitBox).length > 0) {
        this.roomSection = RoomSection.SKILL
        return
      }
    }

    this.roomSection = RoomSection.NONE
  }
}

export default RoomRenderer
