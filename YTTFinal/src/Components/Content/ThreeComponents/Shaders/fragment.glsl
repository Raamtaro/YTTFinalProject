uniform vec4 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform sampler2D uTexture;
uniform sampler2D uDataTexture;

varying vec2 vUv;



void main() {
    vec2 newUV = (vUv - vec2(0.5))*uResolution.zw + vec2(0.5);
    vec4 textureColor = texture2D(uTexture, newUV); //Background image from BackgroundPlane.jsx computed from the uTexture uniform
    vec4 offset = texture2D(uDataTexture, newUV);
    // gl_FragColor = vec4(uMouse.x * 0.75, uMouse.y * 0.76, 0.5 * (pow(pow(uMouse.x, 2.0) + pow(uMouse.y, 2.0), 0.5)), 1.0);
    // gl_FragColor = offset;
    // gl_FragColor = vec4(offset.r, offset.g, offset.b, 1.0);
    vec4 distortedColor = texture2D(uTexture, newUV + offset.xy * 0.05);
    gl_FragColor = vec4(distortedColor.rgb, 1.0);
    #include <colorspace_fragment>
}