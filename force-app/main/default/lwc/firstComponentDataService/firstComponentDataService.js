import { LightningElement, api } from 'lwc';
import id from '@salesforce/user/Id';

export default class firstComponentDataService extends LightningElement {
  @api label = 'WIPDeveloper.com  !!!';

  id = id;

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
