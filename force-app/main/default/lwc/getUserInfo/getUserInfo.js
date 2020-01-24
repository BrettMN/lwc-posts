import { LightningElement, api, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

import UserId from '@salesforce/user/Id';
import UserProfile from '@salesforce/user/Profile';

export default class getUserInfo extends LightningElement {
    userId = UserId || '0050t000003Sz6jAAC';
    profile = UserProfile;

    @wire(getRecord, {
        recordId: '$userId',
        fields: [
            'User.Name',
            'User.Email',
            'User.CompanyName',
            'User.Phone',
            'User.Profile'
        ]
    })
    user;

    get showUser() {
        let returnValue = false;
        if (
            this.user &&
            this.user.data &&
            this.user.data.fields &&
            this.user.data.fields.Name &&
            this.user.data.fields.Name.value
        ) {
            returnValue = true;
        }
        return returnValue;
    }

    logUser() {
        window.console.log(this.user);
    }
}
