import { LightningElement } from 'lwc';

import nesStylesPath from '@salesforce/resourceUrl/stylesToLoad';

import { loadStyle } from 'lightning/platformResourceLoader';

export default class AccessStaticResourceLoadStyle extends LightningElement {
    stylePath = nesStylesPath;

    constructor() {
        super();
        Promise.all([
            loadStyle(this, `${this.stylePath}/nes.css`),
            loadStyle(this, `${this.stylePath}/fonts.css`)
        ]);
    }
}
