import { LightningElement, api } from 'lwc';

export default class FirstComponent extends LightningElement {
  @api label = 'WIPDeveloper.com  !!!';

  handleClick() {

    window.console.log('clicked');

    this.label = this.label.split('').reverse().join('');

  }
}
