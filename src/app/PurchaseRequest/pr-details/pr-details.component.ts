import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {PR} from '../PR';
import {PrServices} from '../PrServices';
import {PRLIService} from '../../PRLIFiles/PRLIService';
import {PRLI} from '../../PRLIFiles/PRLI';

@Component({
  selector: 'app-pr-details',
  templateUrl: './pr-details.component.html',
  styleUrls: ['./pr-details.component.css']
})
export class PRDetailsComponent implements OnInit {
  pr: PR = new PR();
  prlis: PRLI[] = [];
  Total: number = 0;

  constructor(
    private route : ActivatedRoute,
    private PrSvc: PrServices,
    private PrliSvc: PRLIService
    )
      { }
      edit(){
        console.log(this.pr);
        this.PrSvc.edit(this.pr)
        .subscribe(resp => {
          console.log(resp);});
    }

  

  ngOnInit() {
    let Id = this.route.snapshot.params.Id
    this.PrSvc.get(Id)
    .subscribe(resp =>{
    this.pr = resp.Data;});
    console.log(this.pr);
    this.PrliSvc.listOne(Id)
    .subscribe(Response=>{
      this.prlis = Response.Data;
      
      console.log(this.prlis);
      for(var line of this.prlis){
        this.Total += (line.Products.Price * line.Quantity);
      }
    });
    
    
  }

}
