varying vec2 vUv;
uniform float uTime;

void main() {
    gl_FragColor = vec4(abs(sin(uTime)), vUv.x, vUv.y, 1.0);
}