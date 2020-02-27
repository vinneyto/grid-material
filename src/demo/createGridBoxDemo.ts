import { Demo } from './Demo';
import {
  PerspectiveCamera,
  Scene,
  PointLight,
  BoxGeometry,
  Mesh,
  SphereGeometry,
  MeshLambertMaterial
} from 'three';
import { CameraController } from '../CameraController';
import { createRenderer, resizeRenderer } from '../util';
import { GridMaterial } from '../materials/GridMaterial';

export function createGridBoxDemo(): Demo {
  const renderer = createRenderer();
  const camera = new PerspectiveCamera(75, 1, 0.01, 0.8);
  const cameraController = new CameraController(0.3, 0.01);
  const scene = new Scene();

  const lineStep = 0.05;

  const gridMaterial = new GridMaterial(lineStep, 0.005, { depthWrite: false });

  const boxGeometry = new BoxGeometry(0.1, 0.1, 0.1);
  const boxMaterial = gridMaterial;
  const box = new Mesh(boxGeometry, boxMaterial);
  box.position.x = -0.07;
  scene.add(box);

  box.add(
    new Mesh(
      new SphereGeometry(0.03, 32, 32),
      new MeshLambertMaterial({ color: 'red' })
    )
  );

  const sphereGeometry = new SphereGeometry(0.03, 32, 32);
  const sphereMaterial = gridMaterial;
  const sphere = new Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 0.07;
  scene.add(sphere);

  const light = new PointLight();
  scene.add(light);

  const render = () => {
    resizeRenderer(renderer, camera);

    light.position.copy(camera.position);
    cameraController.update(camera);

    gridMaterial.setLineStep(
      lineStep + Math.cos(performance.now() / 1e3) * lineStep * 0.5
    );

    renderer.render(scene, camera);
  };

  return { render };
}
