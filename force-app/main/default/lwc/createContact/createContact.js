
import { LightningElement, track, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
const fieldArray = ["Contact.LastName", "Contact.Email", "Contact.Phone"]


export default class CreateContact extends LightningElement {

@track Name;
@track Email;
@track Phone;

@track recordId;

@wire(getRecord, {recordId: '$recordId',fields: fieldArray}) contactRecord;

    contactNameChangeHandler(event) {
        this.Name = event.target.value;
    }

    contactEmailChangeHandler(event) {
        this.Email = event.target.value;
    }

    contactPhoneChangeHandler(event) {
        this.Phone= event.target.value;
    }

    createContactHandler(){
        const fields = {"LastName": this.Name, "Email": this.Email, "Phone": this.Phone}

        createRecord({apiName: "Contact", fields}).then(
            res => {console.log("Record have been created successfully");
            this.recordId = res.id;
            

        
        }


        )
        .catch(error => {console.log(error.body.message)})
    
    }

    get retName() {
        if (this.contactRecord.data) {
            console.log(this.contactRecord.data);
            return this.contactRecord.data.fields.LastName.value;
        }
    }

    get retEmail() {
        if (this.contactRecord.data) {
            return this.contactRecord.data.fields.Email.value;
        }
    }

    get retPhone() {
        if (this.contactRecord.data) {
            return this.contactRecord.data.fields.Phone.value;
        }
    }
}