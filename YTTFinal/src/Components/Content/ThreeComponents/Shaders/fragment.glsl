// varying vec2 vUv;
// uniform float uTime;

// void main() {
//     gl_FragColor = vec4(abs(sin(uTime))*0.1, vUv.x + abs(cos(uTime))*0.1, vUv.y, 1.0);
//     #include <colorspace_fragment>
// }

uniform vec4 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;



void main() {
    vec2 newUV = (vUv - vec2(0.5))*uResolution.zw + vec2(0.5);
    vec4 textureColor = texture2D(uTexture, newUV);
    // gl_FragColor = vec4(uMouse.x * 0.75, uMouse.y * 0.76, 0.5 * (pow(pow(uMouse.x, 2.0) + pow(uMouse.y, 2.0), 0.5)), 1.0);
    gl_FragColor = textureColor;
}