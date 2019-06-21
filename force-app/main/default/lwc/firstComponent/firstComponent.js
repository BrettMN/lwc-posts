import { LightningElement, api } from 'lwc';
import userId from '@salesforce/user/Id';

export default class FirstComponent extends LightningElement {
  @api label = 'WIPDeveloper.com  !!!';

  id = userId;

  handleClick() {
    window.console.log('clicked');

    this.label = this.label
      .split('')
      .reverse()
      .join('');
  }
}
