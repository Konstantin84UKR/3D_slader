import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("loadingManager: loading started");
};
loadingManager.onLoaded = () => {
  console.log("loadingManager: loading finished");
};
loadingManager.onProgress = () => {
  console.log("loadingManager: loading progressing");
};
loadingManager.onError = () => {
  console.log("loadingManager: loading error");
};

const textureLoader = new THREE.TextureLoader(loadingManager);

// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// const colorTexture = textureLoader.load('/textures/checkerboard-2x2.png')
const colorTexture_1 = textureLoader.load(
  "/textures/film_1.jpg",
  () => {
    console.log("textureLoader: loading finished");
  },
  () => {
    console.log("textureLoader: loading progressing");
  },
  () => {
    console.log("textureLoader: loading error");
  }
);
// colorTexture_1.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture_1.wrapT = THREE.MirroredRepeatWrapping;
// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3
// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5
// colorTexture.rotation = Math.PI * 0.25
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5
// colorTexture_1.generateMipmaps = false;
// colorTexture_1.minFilter = THREE.NearestFilter;
// colorTexture_1.magFilter = THREE.NearestFilter;

const colorTexture_2 = textureLoader.load("/textures/film_2.jpg");
const colorTexture_3 = textureLoader.load("/textures/film_3.jpg");
const colorTexture_4 = textureLoader.load("/textures/film_4.jpg");
const colorTexture_5 = textureLoader.load("/textures/film_5.jpg");
colorTexture_5.needsUpdate = true;
const metalnessTexture = textureLoader.load("/textures/door/metalness.jpg");
const roughnessTexture = textureLoader.load("/textures/door/roughness.jpg");

/**
 * Object
 */
// const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
// const geometry = new THREE.Plane(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const geometry = new THREE.PlaneGeometry(1, 2, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  //side: THREE.DoubleSide,
  map: colorTexture_1
});
const plane1 = new THREE.Mesh(geometry, material);

const material_2 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: colorTexture_2
});
const plane2 = new THREE.Mesh(geometry, material_2);

const material_3 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: colorTexture_3
});
const plane3 = new THREE.Mesh(geometry, material_3);

const material_4 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: colorTexture_4
});
const plane4 = new THREE.Mesh(geometry, material_4);

const material_5 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: colorTexture_5
});
const plane5 = new THREE.Mesh(geometry, material_5);

plane1.position.x = -2.0;
//plane4.position.y = -0.1;
plane1.rotation.set(0.0, Math.PI / 2, 0.0, 0.0);
scene.add(plane1);

plane2.position.x = -1.0;
plane2.position.y = -0.0;
plane2.rotation.set(0.0, 0.5, 0.0, 0.0);
scene.add(plane2);

scene.add(plane3);

plane4.position.x = 1.0;
plane4.position.y = 0.0;
plane4.rotation.set(0.0, -0.5, 0.0, 0.0);
scene.add(plane4);

plane5.position.x = 2.0;
plane5.position.y = 0.0;
plane5.rotation.set(0.0, -Math.PI / 2, 0.0, 0.0);
scene.add(plane5);

let planeArr = [];
planeArr.push(plane1);
planeArr.push(plane2);
planeArr.push(plane3);
planeArr.push(plane4);
planeArr.push(plane5);

scene.add(plane5);

let colorTexture_6;
let material_6;
let test = false;

// textureLoader.setCrossOrigin("anonymous");
// colorTexture_6 = textureLoader.load(
//   "https://cdn.pixabay.com/photo/2021/03/20/10/26/field-6109500_960_720.jpg",
//   () => {
//     console.log("textureLoader: loading finished");
//     test = true;
//   }
// );

const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
//gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const clock = new THREE.Clock();

canvas.addEventListener("click", event => {
  console.log("click");
  //console.log("event.key");
  //planeUpdate();
});
document.addEventListener("keydown", function(event) {
  console.log("event.key");
  //let planeArrPosition = planeInit();
  planeInit();
  //planeUpdate();
});

function compare(a, b) {
  if (a.position.x < b.position.x) {
    return -1;
  }
  if (a.position.x > b.position.x) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}

const planeInit = () => {
  //   let planeArrGo = [];
  //   if (!sladerStart) {
  //     for (let index = 0; index < planeArr.length; index++) {
  //       let indexGo = index === planeArr.length - 1 ? 0 : index + 1;
  //       planeArrGo[indexGo] = {
  //         position: planeArr[index].position.x,
  //         rotation: planeArr[index].rotation.y
  //       };
  //     }

  //     sladerStart = true;
  //     console.log(planeArrGo);
  //   }

  //   return planeArrGo;

  planeArr.sort(compare);
  // return planeArr.slice();
};
//let planeArrGo = [];
const planeUpdate = () => {
  // let planeArrGo = [];
  // console.log(planeArrGo);
  // if (!sladerStart) {
  //   //planeArrGo = planeInit();
  // }

  const speed = 0.05;

  if (planeArr[0].position.x > 2.0) {
    planeArr[0].position.x -= speed;
  } else if (planeArr[0].position.x > -2.15 && planeArr[0].position.x < 0) {
    planeArr[0].position.x -= speed;
  } else if (planeArr[0].position.x < -2.1) {
    planeArr[0].position.x = 2.5;
  }

  if (
    planeArr[0].rotation.y < Math.PI / 2.5 &&
    planeArr[0].rotation.y > -Math.PI / 2
  ) {
    planeArr[0].rotation.y += speed;
  } else {
    planeArr[0].rotation.set(0.0, -Math.PI / 2, 0.0, 0.0);
  }

  if (planeArr[1].position.x > -2.0) {
    planeArr[1].position.x -= speed;
  }
  if (planeArr[1].rotation.y < Math.PI / 2) {
    planeArr[1].rotation.y += speed;
  } else {
    planeArr[1].rotation.set(0.0, Math.PI / 2, 0.0, 0.0);
  }

  if (planeArr[2].position.x > -1.0) {
    planeArr[2].position.x -= speed;
  }
  if (planeArr[2].rotation.y < 0.5) {
    planeArr[2].rotation.y += speed;
  } else {
    planeArr[2].rotation.set(0.0, 0.5, 0.0, 0.0);
  }

  if (planeArr[3].position.x > 0.0) {
    planeArr[3].position.x -= speed;
  }
  if (planeArr[3].rotation.y < 0.0) {
    planeArr[3].rotation.y += speed;
  } else {
    planeArr[3].rotation.set(0.0, 0.0, 0.0, 0.0);
  }

  if (planeArr[4].position.x > 1.0) {
    planeArr[4].position.x -= speed;
  }
  if (planeArr[4].rotation.y < -0.5) {
    planeArr[4].rotation.y += speed;
  } else {
    planeArr[4].rotation.set(0.0, -0.5, 0.0, 0.0);
  }
};
let sladerStart = false;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  //console.log("sladerStart = " + sladerStart);

  //planeInit();
  planeUpdate();
  //plane1.rotation.x = 0.5;
  // if (test) {
  //   material_5.map = colorTexture_6;
  //   material_5.needsUpdate = true;
  //   test = false;
  // }

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
