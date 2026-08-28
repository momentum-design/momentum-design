import { GRAIN, MAX_DEVICE_PIXEL_RATIO } from '../animatedbackground.constants';
import type { BackgroundRenderer, PoseOffset, UpliftColorSet } from '../animatedbackground.types';

import { colorsToUniformArray } from './token-colors';
import { FRAGMENT_SHADER_SOURCE, VERTEX_SHADER_SOURCE } from './webgl-shaders';

interface WebGLUniforms {
  resolution: WebGLUniformLocation | null;
  viewport: WebGLUniformLocation | null;
  pose: WebGLUniformLocation | null;
  dpr: WebGLUniformLocation | null;
  grain: WebGLUniformLocation | null;
  baseColor: WebGLUniformLocation | null;
  ambientColors: WebGLUniformLocation | null;
  midtoneColors: WebGLUniformLocation | null;
  expressiveColors: WebGLUniformLocation | null;
}

function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);

  if (!shader) {
    throw new Error('Unable to create shader.');
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) ?? 'Unknown shader compile error.';
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

function createProgram(gl: WebGL2RenderingContext): { program: WebGLProgram; uniforms: WebGLUniforms } {
  const program = gl.createProgram();

  if (!program) {
    throw new Error('Unable to create WebGL program.');
  }

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) ?? 'Unknown program link error.';
    gl.deleteProgram(program);
    throw new Error(message);
  }

  gl.useProgram(program);

  const uniforms: WebGLUniforms = {
    resolution: gl.getUniformLocation(program, 'u_resolution'),
    viewport: gl.getUniformLocation(program, 'u_viewport'),
    pose: gl.getUniformLocation(program, 'u_pose'),
    dpr: gl.getUniformLocation(program, 'u_dpr'),
    grain: gl.getUniformLocation(program, 'u_grain'),
    baseColor: gl.getUniformLocation(program, 'u_baseColor'),
    ambientColors: gl.getUniformLocation(program, 'u_ambientColors'),
    midtoneColors: gl.getUniformLocation(program, 'u_midtoneColors'),
    expressiveColors: gl.getUniformLocation(program, 'u_expressiveColors'),
  };

  return { program, uniforms };
}

export class WebGLBackgroundRenderer implements BackgroundRenderer {
  private container?: HTMLElement;

  private canvas?: HTMLCanvasElement;

  private gl?: WebGL2RenderingContext;

  private program?: WebGLProgram;

  private uniforms?: WebGLUniforms;

  private vao?: WebGLVertexArrayObject;

  private poseOffset: PoseOffset = { x: 0, y: 0 };

  private colors?: UpliftColorSet;

  public mount(container: HTMLElement): void {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('aria-hidden', 'true');
    container.replaceChildren(this.canvas);

    const gl = this.canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance',
    });

    if (!gl) {
      throw new Error('WebGL 2 context unavailable.');
    }

    this.gl = gl;

    const { program, uniforms } = createProgram(gl);
    this.program = program;
    this.uniforms = uniforms;

    this.vao = gl.createVertexArray();
    if (this.vao) {
      gl.bindVertexArray(this.vao);
    }

    this.resize();
    this.draw();
  }

  public destroy(): void {
    if (this.gl && this.program) {
      this.gl.deleteProgram(this.program);
    }

    if (this.gl && this.vao) {
      this.gl.deleteVertexArray(this.vao);
    }

    this.container?.replaceChildren();
    this.container = undefined;
    this.canvas = undefined;
    this.gl = undefined;
    this.program = undefined;
    this.uniforms = undefined;
    this.vao = undefined;
    this.colors = undefined;
  }

  public resize(): void {
    if (!this.canvas || !this.gl || !this.uniforms) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
    const width = Math.max(1, Math.round(this.canvas.clientWidth * dpr));
    const height = Math.max(1, Math.round(this.canvas.clientHeight * dpr));

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
    }

    this.draw();
  }

  public setPoseOffset(offset: PoseOffset): void {
    this.poseOffset = offset;
    this.draw();
  }

  public setColors(colors: UpliftColorSet): void {
    this.colors = colors;
    this.draw();
  }

  private draw(): void {
    if (!this.gl || !this.canvas || !this.uniforms || !this.colors) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

    this.gl.useProgram(this.program ?? null);
    if (this.vao) {
      this.gl.bindVertexArray(this.vao);
    }

    this.gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height);
    this.gl.uniform2f(this.uniforms.viewport, this.canvas.clientWidth, this.canvas.clientHeight);
    this.gl.uniform2f(this.uniforms.pose, this.poseOffset.x, this.poseOffset.y);
    this.gl.uniform1f(this.uniforms.dpr, dpr);
    this.gl.uniform1f(this.uniforms.grain, GRAIN.WEBGL);
    this.gl.uniform3f(
      this.uniforms.baseColor,
      this.colors.base.r,
      this.colors.base.g,
      this.colors.base.b,
    );
    this.gl.uniform4fv(this.uniforms.ambientColors, colorsToUniformArray(this.colors.ambient));
    this.gl.uniform4fv(this.uniforms.midtoneColors, colorsToUniformArray(this.colors.midtone, [1]));
    this.gl.uniform4fv(this.uniforms.expressiveColors, colorsToUniformArray(this.colors.expressive));

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
  }
}
