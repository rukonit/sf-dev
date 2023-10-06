import { LightningElement, track } from 'lwc';

export default class MultiplyToTen extends LightningElement {

   @track values = [];


 submitHandler() { 
    
    for (let index = 0; index < 11; index++) {
   
    this.values.push(index)
    
 }}
        
    
}