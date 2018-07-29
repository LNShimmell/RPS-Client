import {Vendor} from '../VendorFiles/Vendor';

export class Product{
    
		ID: number;
		VendorID: number;
		Vendor: Vendor;
		Partnum: string;
	    Name : string;
		Price: number;
		Unit : string;
        Photopath :  string;
        Active: boolean;

        constructor(){
			this.ID = 0;
			this.Price = 0;
			this.Active= true;
			this.VendorID = 0;
        }
}