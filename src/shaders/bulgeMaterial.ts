export const vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const fragment = `
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
        vec2 offset = (uMouse - vec2(0.5)) * 0.05;
        vec2 uv = clamp(vUv + offset, 0.001, 0.999); 
        vec4 tex = texture2D(uTexture, uv);
        gl_FragColor = tex;
    }
`;