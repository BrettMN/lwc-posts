import { LightningElement } from 'lwc';

import jsPath from '@salesforce/resourceUrl/jsToLoad';

import testFiles from '@salesforce/resourceUrl/testFiles';

import { loadScript } from 'lightning/platformResourceLoader';

export default class AccessStaticResourceLoadScript extends LightningElement {
    jsPath = jsPath;
    testFilesPath = testFiles;

    async build() {
        const buildArea = this.template
            .querySelector('canvas.build-area')
            .getContext('2d');
        const img = await this.loadImage(
            `${this.testFilesPath}/WIPDeveloper.com-icon.png`
        );
        loadScript(this, `${this.jsPath}/legra/lib/legra.umd.js`)
            .then(() => {
                let builder = new legra(buildArea, 5);
                // clear the build area before drawing again
                buildArea.clearRect(0, 0, 600, 600);
                builder.rectangle(12, 2, 8, 8);
                builder.circle(15, 15, 12, { color: 'red' });
                builder.ellipse(15, 15, 10, 6, {
                    filled: true,
                    color: 'green'
                });

                // builder.drawImage(img, [0, 0]);
            })
            .catch(err => window.console.log({ err }));
    }

    async loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.addEventListener('load', () => {
                resolve(img);
            });
            img.addEventListener('error', () => {
                reject(new Error('Failed to load image'));
            });
            img.addEventListener('abort', () => {
                reject(new Error('Image load aborted'));
            });
            img.src = src;
        });
    }
}
