uniform float lineStep;
uniform float lineWidth;

varying vec2 v_uv;

void main() {
  float x = v_uv.x;
  float y = v_uv.y;

  float regularX = mod(x, lineStep);
  float regularY = mod(y, lineStep);

  float masterX = mod(x, lineStep * 10.0);
  float masterY = mod(y, lineStep * 10.0);

  if (masterX < lineWidth || masterY < lineWidth) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.2);
  } else if (regularX < lineWidth || regularY < lineWidth) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
}
