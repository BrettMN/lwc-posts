import { LightningElement } from 'lwc';

export default class LmsTest extends LightningElement {
    sendMessage() {
        // TODO: send event
        this.dispatchEvent(
            new CustomEvent('hellofromlwc', { detail: Date.now() })
        );
    }
}
