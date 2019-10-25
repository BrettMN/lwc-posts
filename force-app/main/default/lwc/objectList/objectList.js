import { LightningElement, wire, track } from 'lwc';

import init from '@salesforce/apex/ObjectListController.init';

export default class ObjectList extends LightningElement {
    @track
    accounts;
    @track
    selectedId;

    @wire(init)
    handleInit({ error, data }) {
        this.log('init', { error }, { data });

        if (error) {
            window.console.log('something went wrong');
        } else if (data) {
            this.accounts = data.accounts;
        } else {
            this.log('hmm');
        }
    }
    handleObjectListItemSelected(event){
        this.selectedId = event.detail;
    }

    log(...stuff) {
        console.log(JSON.parse(JSON.stringify(stuff)));
    }
}
