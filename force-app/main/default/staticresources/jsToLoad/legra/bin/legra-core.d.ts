import { Point } from './geometry.js';
export interface ImageOrImageBitmap {
    width: number;
    height: number;
}
export interface BrickRenderOptions {
    color?: string;
    filled?: boolean;
}
export interface BrickRenderOptionsResolved extends BrickRenderOptions {
    brickSize: number;
    color: string;
    filled: boolean;
}
/**********************
 * EXPORTED FUNCTIONS
 **********************/
export declare function rectangle(x: number, y: number, width: number, height: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved, fill?: boolean): void;
export declare function line(x1: number, y1: number, x2: number, y2: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function linearPath(points: Point[], ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function circle(xc: number, yc: number, radius: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function ellipse(xc: number, yc: number, a: number, b: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function polygon(points: Point[], ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function arc(xc: number, yc: number, a: number, b: number, start: number, stop: number, closed: boolean, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function bezierCurve(x1: number, y1: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x2: number, y2: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function quadraticCurve(x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number, ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved): void;
export declare function drawImage(ctx: CanvasRenderingContext2D, style: BrickRenderOptionsResolved, image: ImageOrImageBitmap, dst: Point, dstSize?: Point, src?: Point, srcSize?: Point): void;
