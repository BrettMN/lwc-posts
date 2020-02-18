import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import globalCSS from '@salesforce/resourceUrl/css';

// question from https://wipdeveloper.com/lwc-loading-css-from-a-static-resource/
export default class CssTest extends LightningElement {
    constructor() {
        super();
        window.console.log('globalCSS:', globalCSS);
        loadStyle(this, globalCSS + '/test.css')
            .then(() => {})
            .catch(error => {
                window.console.log('error:', error);
            });
    }
}
