import { LightningElement } from 'lwc';

import imageToUse from '@salesforce/resourceUrl/imageToUse';
import folderToUse from '@salesforce/resourceUrl/testFiles';

export default class AccessStaticResource extends LightningElement {
    imagePath = imageToUse;
    folderPath = folderToUse;

    get folderPathWithImage() {
        return `${this.folderPath}/wipdeveloper-banner-00.png`;
    }
}
