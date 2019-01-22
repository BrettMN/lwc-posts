import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
  test(b, a) {
    let c = [1, 2, 3, 4, 0, 5, 6, 7];

    window.console.log(a, c, b);
  }
}
