import { ShaderMaterial, DoubleSide, ShaderMaterialParameters } from 'three';
import gridVert from '../shaders/grid_vert.glsl';
import gridFrag from '../shaders/grid_frag.glsl';

export class GridMaterial extends ShaderMaterial {
  constructor(
    lineStep: number,
    lineWidth: number,
    params: ShaderMaterialParameters = {}
  ) {
    super({
      vertexShader: gridVert,
      fragmentShader: gridFrag,
      transparent: true,
      uniforms: {
        lineStep: {
          value: lineStep
        },
        lineWidth: {
          value: lineWidth
        }
      },
      side: DoubleSide,
      ...params
    });
  }

  setLineStep(value: number) {
    this.uniforms.lineStep.value = value;
  }

  setLineWidth(value: number) {
    this.uniforms.lineWidth.value = value;
  }
}
