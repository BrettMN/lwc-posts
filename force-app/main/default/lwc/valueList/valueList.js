import { LightningElement, track } from 'lwc';

export default class ValueList extends LightningElement {
    @track values = [0, 1, 2, 3];

    addOne() {
        this.values.push(this.values.length + 1);
    }

    subtrackOne(){
        this.values.pop();
    }
}
