import { LightningElement, api, track } from 'lwc';

export default class Child extends LightningElement {
    @api ourProperty = 'From Child';

    @track childText = 'Child';

    causeChildEvent() {
        this.dispatchEvent(
            new CustomEvent('childevent', {
                detail: `From Child: ${Date.now()}`
            })
        );
    }

    @api setChildText(text) {
        this.childText = text;
    }

    resetChildText() {
        this.setChildText('Child');
    }
}
