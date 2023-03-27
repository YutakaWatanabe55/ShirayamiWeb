// レンダラーの設定
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// カメラの設定
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
camera.position.set(0, 1.1, 3)

// カメラコントーロールの設定
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.target.set(0, 0.85, 0)
controls.screenSpacePanning = true
controls.update()

// シーンの設定
const scene = new THREE.Scene()

// ライトの設定
const light = new THREE.DirectionalLight(0xffffff)
light.position.set(1, 1, 1).normalize()
scene.add(light)

// グリッドを表示
const gridHelper = new THREE.GridHelper(10, 10)
scene.add(gridHelper)
gridHelper.visible = true

// 座標軸を表示
const axesHelper = new THREE.AxesHelper(0.5)
scene.add(axesHelper)

// VRMモデルの読み込み
const loader = new THREE.GLTFLoader();
loader.load('vhttps://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/3D/UTVOfficial2.vrm', (gltf) => {
  const vrmModel = gltf.scene;
  scene.add(vrmModel);
});

// 初回実行
tick()

function tick() {
  requestAnimationFrame(tick)
  // レンダリング
  renderer.render(scene, camera)
}
