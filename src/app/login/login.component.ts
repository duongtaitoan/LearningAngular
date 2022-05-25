import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name = 'Thoreat';
  public password = 'pass';
  public age = 14; 

  public array = ['Apple','Orange', 'Grape'];
  public array1 = [{nameFruit:"Apple", price:12000,discount:true},{nameFruit:"Orange", price:34000},{nameFruit:"Grape", price:25000},{nameFruit:"Grape", price:-18000}];

  constructor() { }

  ngOnInit(): void {
  }

  public resetName():void {
    this.name ='';
    this.password = '';
    this.age = 0;
    console.log(this.resetName());
  }

}
