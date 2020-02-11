/**
 * This is based on https://github.com/Pomax/bezierjs
 * under MIT Licensse
 **/
import { Point } from './geometry.js';
export declare class Bezier {
    private points;
    private dpoints;
    private _lut;
    private order;
    constructor(p1: Point, p2: Point, p3: Point, p4?: Point);
    private update;
    length(): number;
    private derivative;
    getLUT(steps?: number): Point[];
    private compute;
}
