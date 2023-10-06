import { LightningElement, track } from 'lwc';

export default class ParentBox extends LightningElement {
    @track msg= "Default Message";

    constructor() {
        super();
        this.template.addEventListener("custommessage", this.handleCustomEvent.bind(this));
    }

    handleCustomEvent(event) {
        this.msg = event.detail;
        console.log(event);
    }
}