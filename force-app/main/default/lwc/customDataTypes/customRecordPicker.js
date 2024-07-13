import { LightningElement, api } from 'lwc';

export default class CustomRecordPicker extends LightningElement {

  handleChange(event) {

    console.log(event.detail.recordId);
    
    
    const recordPickEvent = new CustomEvent("recordpick", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          message: 'message fired from record picker',
          recordId: event.detail.recordId
        }
    });
    this.dispatchEvent(recordPickEvent); 
  } 
}