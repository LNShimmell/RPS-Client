import { Component, OnInit } from '@angular/core';
import {PR} from '../PR';
import { PrServices} from '../PrServices';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PRListComponent implements OnInit {
  pRequests: PR[] = [];

  constructor(
    private PrSvc: PrServices
  ) { }

  ngOnInit() {
    this.PrSvc.listV().subscribe(resp =>{
      this.pRequests = resp.Data;
    })
  }

}
