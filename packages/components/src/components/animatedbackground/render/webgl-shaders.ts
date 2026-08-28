export const VERTEX_SHADER_SOURCE = `#version 300 es
precision highp float;

const vec2 POSITIONS[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));

void main() {
  gl_Position = vec4(POSITIONS[gl_VertexID], 0.0, 1.0);
}
`;

export const FRAGMENT_SHADER_SOURCE = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_viewport;
uniform vec2 u_pose;
uniform float u_dpr;
uniform float u_grain;
uniform vec3 u_baseColor;
uniform vec4 u_ambientColors[4];
uniform vec4 u_midtoneColors[3];
uniform vec4 u_expressiveColors[3];

const float RAMP_BLUR_STRENGTH = 1.0;

out vec4 fragColor;

float erfApprox(float x) {
  float signX = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + 0.3275911 * x);
  float y = 1.0 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * exp(-x * x);
  return signX * y;
}

float gaussianRelu(float x, float sigma) {
  if (sigma < 0.00001) return max(x, 0.0);
  float z = x / sigma;
  float cdf = 0.5 * (1.0 + erfApprox(z / 1.41421356237));
  float pdf = 0.3989422804 * exp(-0.5 * z * z);
  return x * cdf + sigma * pdf;
}

vec4 blurredRamp0(float t, float sigma) {
  const float p0 = 0.2831194699;
  const float p1 = 0.3161125779;
  const float p2 = 0.6026790142;
  const float p3 = 1.0;
  vec4 c0 = u_ambientColors[0];
  vec4 c1 = u_ambientColors[1];
  vec4 c2 = u_ambientColors[2];
  vec4 c3 = u_ambientColors[3];
  vec4 s0 = (c1 - c0) / (p1 - p0);
  vec4 s1 = (c2 - c1) / (p2 - p1);
  vec4 s2 = (c3 - c2) / (p3 - p2);
  vec4 result = c0;
  result += s0 * gaussianRelu(t - p0, sigma);
  result += (s1 - s0) * gaussianRelu(t - p1, sigma);
  result += (s2 - s1) * gaussianRelu(t - p2, sigma);
  result -= s2 * gaussianRelu(t - p3, sigma);
  return clamp(result, 0.0, 1.0);
}

vec4 blurredRamp1(float t, float sigma) {
  const float p0 = 0.0;
  const float p1 = 0.5839894414;
  const float p2 = 1.0;
  vec4 c0 = u_midtoneColors[0];
  vec4 c1 = u_midtoneColors[1];
  vec4 c2 = u_midtoneColors[2];
  vec4 s0 = (c1 - c0) / (p1 - p0);
  vec4 s1 = (c2 - c1) / (p2 - p1);
  vec4 result = c0;
  result += s0 * gaussianRelu(t - p0, sigma);
  result += (s1 - s0) * gaussianRelu(t - p1, sigma);
  result -= s1 * gaussianRelu(t - p2, sigma);
  result = clamp(result, 0.0, 1.0);
  if (result.a > 0.00001) result.rgb /= result.a;
  return result;
}

vec4 blurredRamp2(float t, float sigma) {
  const float p0 = 0.0;
  const float p1 = 0.3213909566;
  const float p2 = 0.7950533628;
  vec4 c0 = u_expressiveColors[0];
  vec4 c1 = u_expressiveColors[1];
  vec4 c2 = u_expressiveColors[2];
  vec4 s0 = (c1 - c0) / (p1 - p0);
  vec4 s1 = (c2 - c1) / (p2 - p1);
  vec4 result = c0;
  result += s0 * gaussianRelu(t - p0, sigma);
  result += (s1 - s0) * gaussianRelu(t - p1, sigma);
  result -= s1 * gaussianRelu(t - p2, sigma);
  return clamp(result, 0.0, 1.0);
}

vec4 blurredRamp(int index, float t, float sigma) {
  return index == 0 ? blurredRamp0(t, sigma) : (index == 1 ? blurredRamp1(t, sigma) : blurredRamp2(t, sigma));
}

vec2 inverseMatrix(vec2 point, vec4 matrix, vec2 translation) {
  vec2 delta = point - translation;
  float determinant = matrix.x * matrix.w - matrix.y * matrix.z;
  return vec2(
    (matrix.w * delta.x - matrix.z * delta.y) / determinant,
    (-matrix.y * delta.x + matrix.x * delta.y) / determinant
  );
}

vec4 ellipseLayer(vec2 designPoint, int index) {
  vec2 size;
  vec4 matrix;
  vec2 translation;
  vec3 gradient;
  float sigma;

  if (index == 0) {
    size = vec2(1096.087890625);
    matrix = vec4(-0.9957175255, -0.0924480259, 0.0924480259, -0.9957175255);
    translation = vec2(1228.7550811768, 1257.7026062012);
    gradient = vec3(0.5245503783, 1.2305730581, -0.2622751892);
    sigma = 100.0;
  } else if (index == 1) {
    size = vec2(414.2329711914, 412.6757507324);
    matrix = vec4(0.8931230903, -0.4498123825, 0.4498123825, 0.8931230903);
    translation = vec2(754.5301666260, 825.7383117676);
    gradient = vec3(1.1278702021, -0.3397463858, 0.0159247983);
    sigma = 50.0;
  } else {
    size = vec2(573.9616088867, 571.8039550781);
    matrix = vec4(-0.9849522114, -0.1728270054, 0.1728270054, -0.9849522114);
    translation = vec2(1628.2357940674, 1194.3095397949);
    gradient = vec3(-0.5406105518, 1.6105092764, -0.1694470346);
    sigma = 100.0;
  }

  vec2 local = inverseMatrix(designPoint, matrix, translation);
  vec2 centered = local - size * 0.5;
  vec2 radii = size * 0.5;
  float normalizedRadius = length(centered / radii);
  float signedDistance = (normalizedRadius - 1.0) * min(radii.x, radii.y);
  float shapeAlpha = 0.5 * (1.0 - erfApprox(signedDistance / (1.41421356237 * sigma)));

  vec2 normal = normalizedRadius > 0.0001 ? normalize(centered) : vec2(0.0);
  vec2 colorLocal = local - normal * sigma * 1.8 * (1.0 - shapeAlpha);
  vec2 shifted = colorLocal - size * 0.5;
  float shiftedRadius = length(shifted / radii);
  if (shiftedRadius > 1.0) colorLocal = size * 0.5 + shifted / shiftedRadius;
  vec2 uv = colorLocal / size;
  float t = gradient.x * uv.x + gradient.y * uv.y + gradient.z;
  float gradientSigma = sigma * length(gradient.xy / size) * RAMP_BLUR_STRENGTH;
  vec4 color = blurredRamp(index, t, gradientSigma);
  color.a *= shapeAlpha;
  return color;
}

vec3 over(vec3 destination, vec4 source) {
  return source.rgb * source.a + destination * (1.0 - source.a);
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 overlay(vec3 base, float blend) {
  vec3 low = 2.0 * base * blend;
  vec3 high = 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
  return mix(low, high, step(vec3(0.5), base));
}

void main() {
  vec2 screenPoint = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y) / u_dpr;
  float scale = max(u_viewport.x / 1280.0, u_viewport.y / 720.0);
  vec2 stageOffset = vec2(u_viewport.x - 1280.0 * scale, u_viewport.y - 720.0 * scale);
  vec2 designPoint = (screenPoint - stageOffset) / scale - u_pose;

  vec3 color = u_baseColor;
  color = over(color, ellipseLayer(designPoint, 0));
  color = over(color, ellipseLayer(designPoint, 1));
  color = over(color, ellipseLayer(designPoint, 2));

  vec2 grainCell = floor(screenPoint * 0.75);
  float noise = hash12(grainCell) * 0.6666667 + hash12(grainCell * 2.0 + 19.17) * 0.3333333;
  color = mix(color, overlay(color, noise), u_grain);
  fragColor = vec4(color, 1.0);
}
`;
