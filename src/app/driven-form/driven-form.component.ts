import { CommonService } from 'app/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {

  public name = "";
  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  public sendData():void{
    this.common.submitData(this.name);
  }

}
