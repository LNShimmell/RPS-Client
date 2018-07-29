import {User} from '../UserFiles/User';

export class PR{
    Id: number
    Description: string;
    RejectionReason: string;
    DeliveryMode: string;
    Status: string;
    Total: number;
    Active: boolean;
    UserID: number;
    User: User;
    
    constructor(){
        this.Id = 0;
        this.DeliveryMode = 'UPS';
        this.Total = 0;
        this.Active = true;
        this.UserID = 0;
        this.Status = 'In Progress';
        this.RejectionReason = '-';
        
        
    }
}