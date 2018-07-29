import {PRLI} from '../PRLIFiles/PRLI'

export class VendorOrder{
    Prlis: PRLI[];
    Total: number;
    Quant: number[];
    productName: string[];
    Cost: number[];


    constructor(){
        this.Total = 0;
    }

}