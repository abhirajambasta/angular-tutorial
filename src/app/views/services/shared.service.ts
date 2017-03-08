import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  log(args: any[]): void {
    console.log(args);
  }
  info(args: any[]): void {
    console.info(args);
  }

  private obj = {};
  setVal(index, val){
    this.obj[index] = val;
  }
  getVal(){
    console.log(this.obj);
    return this.obj;
  }
}
