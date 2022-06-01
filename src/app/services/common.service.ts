import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  constructor() { }
  
  public square(n:number):number{
    return n * n;
  }
  
  public set setCounter(v : number) {
    this.counter = v;
  }
    
  public get getCounter() : number {
    return this.counter;
  }
  
  public submitData(data:any):void{
    console.log("submit data in services: ", data);
  }

}
