import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = 'Thoreat';
  public password = 'pass';
  public age = 14; 

  public inputName = '';
  public setColor = 'black';

  public array = ['Apple','Orange', 'Grape'];
  public array1 = [{nameFruit:"Apple", price:12000,discount:true},{nameFruit:"Orange", price:34000},{nameFruit:"Grape", price:25000},{nameFruit:"Grape", price:-18000}];

  public counter = 0;
  public square2 = 0;
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter;
    this.square2 = this.common.square(this.counter);
    this.common.counter++;
  }
  
  public resetName():void {
    this.name ='';
    this.password = '';
    this.age = 0;
    console.log(this.resetName());
  }

}
