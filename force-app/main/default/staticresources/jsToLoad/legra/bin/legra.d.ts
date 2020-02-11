import { BrickRenderOptions, ImageOrImageBitmap } from './legra-core.js';
import { Point } from './geometry.js';
export { ImageOrImageBitmap } from './legra-core';
export default class Legra {
    private ctx;
    private defaultOptions;
    constructor(ctx: CanvasRenderingContext2D, brickSize?: number, options?: BrickRenderOptions);
    private opt;
    line(x1: number, y1: number, x2: number, y2: number, options?: BrickRenderOptions): void;
    linearPath(points: Point[], options?: BrickRenderOptions): void;
    rectangle(x: number, y: number, width: number, height: number, options?: BrickRenderOptions): void;
    circle(xc: number, yc: number, radius: number, options?: BrickRenderOptions): void;
    ellipse(xc: number, yc: number, a: number, b: number, options?: BrickRenderOptions): void;
    polygon(points: Point[], options?: BrickRenderOptions): void;
    arc(xc: number, yc: number, a: number, b: number, start: number, stop: number, closed: boolean, options?: BrickRenderOptions): void;
    bezierCurve(x1: number, y1: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x2: number, y2: number, options?: BrickRenderOptions): void;
    quadraticCurve(x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number, options?: BrickRenderOptions): void;
    drawImage(image: ImageOrImageBitmap, dst: Point, dstSize?: Point, src?: Point, srcSize?: Point): void;
}
