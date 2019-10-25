import { LightningElement, api } from 'lwc';

export default class objectListItem extends LightningElement {
    @api
    account;

    handleSelect() {
        this.dispatchEvent(
            new CustomEvent('objectlistitemselected', {
                detail: this.account.Id
            })
        );
    }
}
