import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public smsParent = '';

  @ViewChild('teos') teo: ChildComponent|undefined;
  @ViewChild('tis') ti: ChildComponent|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public callChild(nameChild:string){
    this.smsParent = 'hello child :(',nameChild,')';
  }

  public gift(){
    this.teo?.childMoney(10);
    this.ti?.childMoney(20);
  }
}
