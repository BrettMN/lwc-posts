import { LightningElement } from 'lwc';

export default class ClickToCopy extends LightningElement {
    copyToClipboard() {
        let copyMe = this.template.querySelector('.copy-me');

        copyMe.select();
        copyMe.setSelectionRange(0, 9999999);

        document.execCommand('copy');
    }
}
