import { line, linearPath, rectangle, circle, ellipse, polygon, arc, bezierCurve, quadraticCurve, drawImage } from './legra-core.js';
export default class Legra {
    constructor(ctx, brickSize = 24, options) {
        this.defaultOptions = {
            brickSize: 24,
            color: '#2196F3',
            filled: false
        };
        this.ctx = ctx;
        this.defaultOptions.brickSize = brickSize;
        if (options) {
            if (options.color) {
                this.defaultOptions.color = options.color;
            }
            if (typeof options.filled === 'boolean') {
                this.defaultOptions.filled = options.filled;
            }
        }
    }
    opt(options) {
        if (options) {
            return Object.assign({}, this.defaultOptions, options);
        }
        return this.defaultOptions;
    }
    line(x1, y1, x2, y2, options) {
        line(x1, y1, x2, y2, this.ctx, this.opt(options));
    }
    linearPath(points, options) {
        linearPath(points, this.ctx, this.opt(options));
    }
    rectangle(x, y, width, height, options) {
        rectangle(x, y, width, height, this.ctx, this.opt(options));
    }
    circle(xc, yc, radius, options) {
        circle(xc, yc, radius, this.ctx, this.opt(options));
    }
    ellipse(xc, yc, a, b, options) {
        ellipse(xc, yc, a, b, this.ctx, this.opt(options));
    }
    polygon(points, options) {
        polygon(points, this.ctx, this.opt(options));
    }
    arc(xc, yc, a, b, start, stop, closed, options) {
        arc(xc, yc, a, b, start, stop, closed, this.ctx, this.opt(options));
    }
    bezierCurve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, options) {
        bezierCurve(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, this.ctx, this.opt(options));
    }
    quadraticCurve(x1, y1, cpx, cpy, x2, y2, options) {
        quadraticCurve(x1, y1, cpx, cpy, x2, y2, this.ctx, this.opt(options));
    }
    drawImage(image, dst, dstSize, src, srcSize) {
        drawImage(this.ctx, this.opt(), image, dst, dstSize, src, srcSize);
    }
}
