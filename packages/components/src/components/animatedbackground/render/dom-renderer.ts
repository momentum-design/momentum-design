import { DESIGN_HEIGHT, DESIGN_WIDTH, ELLIPSE_GEOMETRY, GRAIN } from '../animatedbackground.constants';
import type { BackgroundRenderer, GradientLayerName, PoseOffset, RgbaColor, UpliftColorSet } from '../animatedbackground.types';

const SVG_NS = 'http://www.w3.org/2000/svg';

function rgbCss(color: RgbaColor): string {
  return `rgb(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)})`;
}

function gradientLine(ellipse: (typeof ELLIPSE_GEOMETRY)[number]) {
  const [a, b, c] = ellipse.g;
  const dx = a / ellipse.w;
  const dy = b / ellipse.h;
  const lengthSquared = dx * dx + dy * dy;

  return {
    x1: `${(-c * dx) / lengthSquared + ellipse.pad}`,
    y1: `${(-c * dy) / lengthSquared + ellipse.pad}`,
    x2: `${((1 - c) * dx) / lengthSquared + ellipse.pad}`,
    y2: `${((1 - c) * dy) / lengthSquared + ellipse.pad}`,
  };
}

function layerColors(colors: UpliftColorSet, layer: GradientLayerName): RgbaColor[] {
  return colors[layer];
}

export class DomBackgroundRenderer implements BackgroundRenderer {
  private container?: HTMLElement;

  private root?: HTMLDivElement;

  private stage?: HTMLDivElement;

  private group?: HTMLDivElement;

  private grain?: HTMLDivElement;

  private poseOffset: PoseOffset = { x: 0, y: 0 };

  private colors?: UpliftColorSet;

  public mount(container: HTMLElement): void {
    this.container = container;

    this.root = document.createElement('div');
    this.root.className = 'dom-root';
    this.root.setAttribute('aria-hidden', 'true');

    this.stage = document.createElement('div');
    this.stage.className = 'dom-stage';

    this.group = document.createElement('div');
    this.group.className = 'dom-ellipse-group';

    this.grain = document.createElement('div');
    this.grain.className = 'dom-grain';

    this.stage.append(this.group);
    this.root.append(this.stage, this.grain);
    container.replaceChildren(this.root);

    this.applyGrain();
    this.resize();
    this.rebuildEllipses();
    this.applyPose();
  }

  public destroy(): void {
    this.container?.replaceChildren();
    this.container = undefined;
    this.root = undefined;
    this.stage = undefined;
    this.group = undefined;
    this.grain = undefined;
    this.colors = undefined;
  }

  public resize(): void {
    if (!this.root || !this.stage) {
      return;
    }

    const { width, height } = this.root.getBoundingClientRect();
    const scale = Math.max(width / DESIGN_WIDTH, height / DESIGN_HEIGHT);

    this.stage.style.transform = `translate(${width - DESIGN_WIDTH * scale}px, ${height - DESIGN_HEIGHT * scale}px) scale(${scale})`;
  }

  public setPoseOffset(offset: PoseOffset): void {
    this.poseOffset = offset;
    this.applyPose();
  }

  public setColors(colors: UpliftColorSet): void {
    this.colors = colors;

    if (this.root) {
      this.root.style.background = rgbCss(colors.base);
    }

    this.rebuildEllipses();
  }

  private applyPose(): void {
    if (!this.group) {
      return;
    }

    this.group.style.transition = 'none';
    this.group.style.transform = `translate3d(${this.poseOffset.x}px, ${this.poseOffset.y}px, 0)`;
  }

  private applyGrain(): void {
    if (!this.grain) {
      return;
    }

    const grainContrast = GRAIN.DOM_CONTRAST;
    const grainIntercept = (1 - grainContrast) / 2;
    const noiseSvg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
      "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/>" +
      "<feColorMatrix type='saturate' values='0'/>" +
      `<feComponentTransfer><feFuncR type='linear' slope='${grainContrast}' intercept='${grainIntercept}'/>` +
      `<feFuncG type='linear' slope='${grainContrast}' intercept='${grainIntercept}'/>` +
      `<feFuncB type='linear' slope='${grainContrast}' intercept='${grainIntercept}'/></feComponentTransfer>` +
      "</filter><rect width='160' height='160' filter='url(#n)'/></svg>";

    this.grain.style.backgroundImage = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(noiseSvg)}")`;
    this.grain.style.opacity = `${GRAIN.DOM_OPACITY}`;
  }

  private rebuildEllipses(): void {
    if (!this.group || !this.colors) {
      return;
    }

    this.group.replaceChildren();

    for (const ellipse of ELLIPSE_GEOMETRY) {
      const line = gradientLine(ellipse);
      const [a, b, c, d, tx, ty] = ellipse.m;
      const width = ellipse.w + ellipse.pad * 2;
      const height = ellipse.h + ellipse.pad * 2;
      const stops = layerColors(this.colors, ellipse.layer);

      const svg = document.createElementNS(SVG_NS, 'svg');
      const defs = document.createElementNS(SVG_NS, 'defs');
      const gradient = document.createElementNS(SVG_NS, 'linearGradient');
      const shape = document.createElementNS(SVG_NS, 'ellipse');

      svg.setAttribute('width', `${width}`);
      svg.setAttribute('height', `${height}`);
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.classList.add('dom-ellipse');
      svg.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty}) translate(${-ellipse.pad}px, ${-ellipse.pad}px)`;
      svg.style.filter = `blur(${ellipse.blur}px)`;

      gradient.id = `grad-${ellipse.id}-${Math.random().toString(36).slice(2, 8)}`;
      gradient.setAttribute('gradientUnits', 'userSpaceOnUse');

      for (const [name, value] of Object.entries(line)) {
        gradient.setAttribute(name, value);
      }

      ellipse.stopPositions.forEach((position, index) => {
        const stopColor = stops[index] ?? { r: 0, g: 0, b: 0, a: 1 };
        const stop = document.createElementNS(SVG_NS, 'stop');
        stop.setAttribute('offset', `${position}`);
        stop.setAttribute('stop-color', rgbCss(stopColor));
        stop.setAttribute('stop-opacity', `${ellipse.stopAlphas[index] ?? stopColor.a}`);
        gradient.append(stop);
      });

      shape.setAttribute('cx', `${ellipse.pad + ellipse.w / 2}`);
      shape.setAttribute('cy', `${ellipse.pad + ellipse.h / 2}`);
      shape.setAttribute('rx', `${ellipse.w / 2}`);
      shape.setAttribute('ry', `${ellipse.h / 2}`);
      shape.setAttribute('fill', `url(#${gradient.id})`);

      defs.append(gradient);
      svg.append(defs, shape);
      this.group.append(svg);
    }
  }
}
