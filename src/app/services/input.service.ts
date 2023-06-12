import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }

  input: any;

  getInfo(){
    return this.input;
  }

  setInfo(value: any){
    this.input = value;
  }

}
