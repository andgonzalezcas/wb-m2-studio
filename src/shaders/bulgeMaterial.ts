export const vertex = `
    uniform float uTime;
    uniform float uAmplitude;
    uniform float uWaveLength;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 newPosition = position;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;

export const fragment = `
    precision highp float;
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;
    uniform float uRadius;
    uniform float uStrength;
    uniform float uBulge;

    varying vec2 vUv;

    vec2 bulge(vec2 uv, vec2 center) {
        uv -= center; // center to mouse

        float dist = length(uv) / uRadius;
        float distPow = pow(dist, 4.);
        float strengthAmount = uStrength / (1.0 + distPow);

        uv *= (1. - uBulge) + uBulge * strengthAmount;

        uv += center;

        return uv;
    }

    void main() {
        vec2 bulgeUV = bulge(vUv, uMouse);
        vec4 tex = texture2D(uTexture, bulgeUV);
        gl_FragColor.rgb = tex.rgb;
        gl_FragColor.a = 1.0;
    }
`;