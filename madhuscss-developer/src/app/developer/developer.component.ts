import { Component, OnInit } from '@angular/core';
import { ProfessionListService } from '../profession-list.service';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  public recordDetails:any[]=[];

  constructor(public record:ProfessionListService) {
    this.recordDetails=this.record.dataDetails;
   }

  ngOnInit(): void {
  }
  



}
