export class Vendor{
    Id : number;
    Code : string;
    Name : string;
    Address :string;
    City: string;
    State : string;
    Phone : string;
    Zip: string;
    Email : string;
    IsPreapproved :boolean;
    Active : boolean;
    

    constructor(){
        this.Id = 0;
        this.Active = true;
        this.IsPreapproved = true;
    }
}