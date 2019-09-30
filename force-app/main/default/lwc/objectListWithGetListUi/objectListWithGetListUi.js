import {LightningElement, track, wire} from 'lwc';
import {getListUi} from "lightning/uiListApi";

export default class ObjectListWithGetListUi extends LightningElement {
    @track accounts;

    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'All_Accounts',
        pageSize: 2000,
        sortBy: 'Name'
    })
    handleGetAccounts({ error, data }) {
        this.log(error, data);

        if (error) {
            return;
        }

        if (data) {
            this.accounts = data.records.records;
        }
    }

    log(...stuff) {
        console.log(JSON.parse(JSON.stringify(stuff)));
    }
}