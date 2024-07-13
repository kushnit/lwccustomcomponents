import getContacts from '@salesforce/apex/ContactController.getContactList';
import { LightningElement, wire } from 'lwc';

const COLS = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    {
        label: 'Record Picker',
        type: 'customRecordPick',
        fieldName: "Search",
        typeAttributes: {
            objectName: "Contact"
        },
    }
];
export default class DatatableCustomDataType extends LightningElement {
    columns = COLS;

    @wire(getContacts)
    contacts;

    handleRecordPick(event){
        console.log(event.detail.message);
        console.log(event.detail.recordId);
    }
}