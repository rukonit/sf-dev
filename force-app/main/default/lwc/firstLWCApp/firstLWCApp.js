import { LightningElement, track } from 'lwc';

export default class FirstLWCApp extends LightningElement {

    @track firstName;
    @track toggle = true;

    changeHandler(event) {
        this.firstName = event.target.value;
    }

    toggleHandler() {
        this.toggle = !this.toggle;
    }

}