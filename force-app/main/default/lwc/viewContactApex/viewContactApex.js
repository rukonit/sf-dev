import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContacts'

export default class ViewContactApex extends LightningElement {

    //@wire(getAllContacts, {recordLim: 5}) contacts;
    contacts;

    get responseReceived(){
        if(this.contacts) {
            return true;
        }
        else {
            return false;
        }

    }

    async handleContact(event) {
        // getAllContacts({recordLim: event.target.value}).then(res => {
        //     console.log(getAllContacts({recordLim: event.target.value}))
        //     this.contacts = res;
        // }).catch(
        //     error => {
        //         console.log(error.body.message)
        //     }
        // )

        try {
        const res = await getAllContacts({recordLim: event.target.value});
        console.log('The response is' + res)

        this.contacts = res;
        }
        catch(error) {
            console.log(error);
            console.log(error.body.message);
        }


        


    }
}