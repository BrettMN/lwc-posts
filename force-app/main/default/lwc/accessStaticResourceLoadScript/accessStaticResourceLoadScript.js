import { LightningElement } from 'lwc';

import jsPath from '@salesforce/resourceUrl/jsToLoad';

import testFiles from '@salesforce/resourceUrl/testFiles';

import { loadScript } from 'lightning/platformResourceLoader';

export default class AccessStaticResourceLoadScript extends LightningElement {
    jsPath = jsPath;
    testFilesPath = testFiles;

    builder;

    async build() {
        const img = await this.loadImage(
            `${this.testFilesPath}/WIPDeveloper.com-icon.png`
        );

        const buildArea = this.template
            .querySelector('canvas.build-area')
            .getContext('2d');

        loadScript(this, `${jsPath}/legra/lib/legra.umd.js`)
            .then(() => {
                this.builder = new legra(buildArea, 5);

                // buildArea.clearRect(0, 0, 600, 600);
                // this.builder.rectangle(12, 2, 8, 8);

                // this.builder.circle(15, 15, 12, { color: 'red' });
                // this.builder.ellipse(15, 15, 10, 6, {
                //     filled: true,
                //     color: 'green'
                // });

                this.builder.drawImage(img, [0, 0]);
            })
            .catch(error => {
                window.console.log({ error });
            });
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
