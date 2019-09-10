import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api ourProperty = 'From Child';

    causeChildEvent() {
        this.dispatchEvent(
            new CustomEvent('childevent', {
                detail: `From Child: ${Date.now()}`
            })
        );
    }
}
