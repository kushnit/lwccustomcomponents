import LightningDatatable from 'lightning/datatable';
import customPicture from './customPicture.html';
import CustomRecordPicker from './customRecordPicker.html';
import { loadStyle } from "lightning/platformResourceLoader";
import CustomDataTableResource from "@salesforce/resourceUrl/CustomDataTable";

export default class CustomDataTypes extends LightningDatatable {
    static customTypes = {
        customPictureType: {
            template: customPicture,
            standardCellLayout: true,
            typeAttributes: ['pictureUrl']
        },
        customRecordPick: {
            template: CustomRecordPicker,
            standardCellLayout: true,
            typeAttributes: ['objectName']
        }
        // Other Custom Types
    };

    connectedCallback() {
        loadStyle(this, CustomDataTableResource)
    }
}