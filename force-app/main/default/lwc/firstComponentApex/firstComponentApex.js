import { LightningElement, api, wire, track } from 'lwc';
import init from '@salesforce/apex/firstComponentController.init';

export default class firstComponentApex extends LightningElement {
  @api label = 'WIPDeveloper.com  !!!';

  @track user;

  @wire(init)
  handleInit({ error, data }) {
    window.console.log('init');
    if (error) {
      window.console.log(`Something went wrong ${error}`);
      window.console.log(JSON.parse(JSON.stringify(error)));
    } else if (data) {
      window.console.log(JSON.parse(JSON.stringify(data)));
      this.user = data.user;
    } else {
      window.console.log('hmmm');
    }
  }

  get name() {
    return this.user ? this.user.Name : '';
  }

  get companyName() {
    return this.user ? this.user.CompanyName : '';
  }

  get email() {
    return this.user ? this.user.Email : '';
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
