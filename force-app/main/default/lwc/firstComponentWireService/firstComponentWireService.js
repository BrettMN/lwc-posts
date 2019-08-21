import { LightningElement, api, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

import UserId from '@salesforce/user/Id';

export default class firstComponentWireService extends LightningElement {
  @api label;

  userId = UserId;

  @wire(getRecord, {
    recordId: '$userId',
    fields: ['User.Name', 'User.Email', 'User.CompanyName', 'User.Phone']
  })
  user;

  get name() {
    window.console.log('name');
    let returnValue = '';
    if (
      this.user &&
      this.user.data &&
      this.user.data.fields &&
      this.user.data.fields.Name &&
      this.user.data.fields.Name.value
    ) {
      returnValue = this.user.data.fields.Name.value;
    }
    return returnValue;
  }

  get email() {
    let returnValue = '';
    if (
      this.user &&
      this.user.data &&
      this.user.data.fields &&
      this.user.data.fields.Email &&
      this.user.data.fields.Email.value
    ) {
      returnValue = this.user.data.fields.Email.value;
    }
    return returnValue;
  }

  get companyName() {
    let returnValue = '';
    if (
      this.user &&
      this.user.data &&
      this.user.data.fields &&
      this.user.data.fields.CompanyName &&
      this.user.data.fields.CompanyName.value
    ) {
      returnValue = this.user.data.fields.CompanyName.value;
    }
    return returnValue;
  }

  get phone() {
    let returnValue = '';
    if (
      this.user &&
      this.user.data &&
      this.user.data.fields &&
      this.user.data.fields.Phone &&
      this.user.data.fields.Phone.value
    ) {
      returnValue = this.user.data.fields.Phone.value;
    }
    return returnValue;
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
