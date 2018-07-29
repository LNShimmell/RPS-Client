import {PR} from '../PurchaseRequest/PR';
import {Product} from '../ProductFiles/Products';

export class PRLI{
    Id: number;
    
    PurchaseRequestId: number;
    PurchaseRequest: PR;
    ProductId: number;
    Products: Product;
    Quantity: number;

    constructor(){
        this.Id= 0;
        this.PurchaseRequestId = 0;
        this.ProductId = 0;
        this.Quantity = 0;
    }
}