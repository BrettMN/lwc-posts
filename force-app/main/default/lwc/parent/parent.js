import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    @track childData;

    handleChildEvent(event) {
        this.childData = event.detail;
    }

    setChildOneText() {
        this.template
            .querySelector('c-child.one')
            .setChildText('Text from parent for Child one');
    }

    setChildTwoText() {
        this.template
            .querySelector('c-child.two')
            .setChildText('Text from parent for Child two');}
}
