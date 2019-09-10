import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    @track childData;

    handleChildEvent(event) {
        this.childData = event.detail;
    }
}
