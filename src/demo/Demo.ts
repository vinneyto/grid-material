import { WebGLRenderer } from 'three';

export interface Demo {
  resize(renderer: WebGLRenderer): void;
  render(renderer: WebGLRenderer): void;
}
