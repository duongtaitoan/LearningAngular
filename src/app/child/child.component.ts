import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name:string = '';
  @Output() callChild: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public callParent(){
    this.callChild.emit(this.name);
  }

  public childMoney(amount:number){
    console.log('your',this.name+' get parent gift money :'+amount);
  }
}
