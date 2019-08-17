import { LightningElement, api, wire, track } from 'lwc';

import init from '@salesforce/apex/firstComponentController.init';

export default class firstComponentApex extends LightningElement {
  @api label;

  @track user;

  @wire(init)
  handleInit({ error, data }) {
    window.console.log('init', { error }, { data });

    if (error) {
      window.console.log('something went wrong');
    } else if (data) {
      this.user = data.user;
    } else {
      window.console.log('hmm');
    }
  }

  get name() {
    window.console.log('name');
    return this.user ? this.user.Name : '';
  }

  get email() {
    return this.user ? this.user.Email : '';
  }

  get companyName() {
    return this.user ? this.user.CompanyName : '';
  }

  get phone() {
    return this.user ? this.user.Phone : '';
  }

  handleClick() {
    window.console.log('clicked');

    const url = window.location.href;

    const idPattern = /(?:\/lightning\/)([a-zA-Z]{4})\//;

    const idFromRegex = url.match(idPattern);

    window.console.log(idFromRegex);

    this.label = this.label
      .split('')
      .reverse()
      .join('');
  }
}
