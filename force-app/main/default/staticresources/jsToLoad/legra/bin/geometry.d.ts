export declare type Point = [number, number];
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface EdgeEntry {
    ymin: number;
    ymax: number;
    x: number;
    islope: number;
}
export interface ActiveEdgeEntry {
    s: number;
    edge: EdgeEntry;
}
export declare function angle(o: Point, v1: Point, v2: Point): number;
export declare function derive(points: Point[]): Point[][];
export declare type DerivativeFn = (t: number) => Point;
export declare function length(derivativeFn: DerivativeFn): number;
export declare function computeBezierPoint(t: number, points: Point[]): Point;
