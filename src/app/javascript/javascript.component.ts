import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/services/common.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  public counter:number = 0;
  public square2:number = 0;
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter;
    this.square2 = this.common.square(this.counter);
    this.common.counter++;
  }
}
