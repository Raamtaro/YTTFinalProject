uniform vec4 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform sampler2D uTexture;
uniform sampler2D uNextTexture;
uniform sampler2D uDataTexture;
uniform float uMixFactor;

varying vec2 vUv;



void main() {

    vec2 newUV = (vUv - vec2(0.5))*uResolution.zw + vec2(0.5);
    vec4 textureColor = texture2D(uTexture, newUV); //Background image from BackgroundPlane.jsx computed from the uTexture uniform
    vec4 offset = texture2D(uDataTexture, vUv); //Createing the grid effect with the mouse

    //Setting up connection with the nextTexture
    vec4 nextColor = texture2D(uNextTexture, newUV);
    vec4 finalColor = mix(textureColor, nextColor, uMixFactor);

    // gl_FragColor = vec4((finalColor.rgb * (1.0 - vec3(offset.r) * 0.02)), finalColor.a);
    gl_FragColor = texture2D(uTexture, newUV - 0.02*offset.rg);
    
    #include <colorspace_fragment>
}